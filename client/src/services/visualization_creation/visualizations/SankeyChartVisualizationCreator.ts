import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
import {
  sankey as d3Sankey,
  sankeyLinkHorizontal
} from 'd3-sankey';
import * as colorbrewer from 'colorbrewer';
export class SankeyChartVisualizationCreator extends VisualizationDrawer {


  steps = [];
  width = 0;
  height = 0;
  margins = null;
  barsGroup = null;
  sankey = null;
  path = null;
  svg = null;
  linksGroup = null;
  nodesGroup = null;
      // Return only 1 - p quantile to reduce possibility of overlapping text
    // Define p as an arbitrary number between [0,1]
  p = 0.8;
  public Draw(): boolean {

  console.log('Sankey diagram')
  const Entry = this.Entries;
  const id = '#' + Entry.id;


  // Define the hierarchical categories of the sankey

  const dims = [];
  const groups = [];

  Entry.Questions.forEach(element => {
    const dim = Entry.ndx.dimension(d => d[element.variable]);
    const group = dim.group().reduceSum(d => {
      return Math.round(+d.value);
    });
    dims.push(dim);
    groups.push(group);

    this.steps.push({ name: element.variable, label: element.variable });
  });

  const sankeyDim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);

  console.log(this.steps);
  this.width = Entry.width;
  this.height = Entry.height;
  this.margins = Entry.margins;

  // append the svg canvas to the page
  this.svg = d3.select(id).append('svg')
    .attr('width', this.width + this.margins.left + this.margins.right)
    .attr('height', this.height + this.margins.top + this.margins.bottom)
    .append('g')
    .attr('transform',
      'translate(' + this.margins.left + ',' + (+this.margins.top) + ')');

  // Set the sankey diagram properties 
  this.sankey = d3Sankey()
    .nodeWidth(12)
    .nodePadding(2)
    .size([this.width, this.height]);

  this.path = this.sankey.link();

  // define the bars group
  this.barsGroup = this.svg.append("g");

  // define the links group
  this.linksGroup = this.svg.append("g");

  // define the node group
  this.nodesGroup = this.svg.append("g");

  // set sankey graph data
  let graph = this.transformToGraph(sankeyDim.top(Infinity));

  dc.renderAll();
  this.renderSankey(graph);
  // this.bindHover();
  // this.renderLabels();
  return true;
}

  // transform JSON data array into sankey graph object with nodes and links arrays
  // inspired by DensityDesign Lab raw.js functions by Giorgio Caviglia, Michele Mauri, Giorgio Uboldi, Matteo Azzi
  // http://app.rawgraphs.io/
  public transformToGraph(data: any) {
  let d = {
    nodes: [],
    links: []
  };

  let n = [];
  let l = [];
  let si;
  let ti;

  for (let i = 0; i < this.steps.length - 1; i++) {

    let sg = this.steps[i].name;
    let tg = this.steps[i + 1].name;
    let relations = d3.nest()
      .key(d => d[sg])
      .key(d => d[tg])
      .entries(data);

    relations.forEach(s => {
      si = getNodeIndex(n, s.key, sg);

      if (si == -1) {
        n.push({
          name: s.key,
          group: sg
        });
        si = n.length - 1;
      }

      s.values.forEach(function (t) {
        ti = getNodeIndex(n, t.key, tg);
        if (ti == -1) {
          n.push({
            name: t.key,
            group: tg
          });
          ti = n.length - 1;
        }
        let value = d3.sum(t.values, function (d) {
          return d.value;
        });
        let link = {
          source: n[si],
          target: n[ti],
          value: value
        };
        l.push(link);
      });
    });
  }

  d.nodes = n.sort(customSort);
  l.forEach(d => {
    d.source = n.indexOf(d.source);
    d.target = n.indexOf(d.target);
  });
  d.links = l;

  function customSort(a, b) {
    const Item1 = a.group;
    const Item2 = b.group;
    if (Item1 !== Item2) {
      return (Item1.localeCompare(Item2));
    } else {
      return (a.name.localeCompare(b.name));
    }
  }

  function getNodeIndex(array: any, name: any, group: any) {
    for (let i in array) {
      let a = array[i];
      if (a['name'] == name && a['group'] == group) {
        return i;
      }
    }
    return -1;
  }

  return d;

}

  private renderLabels() {

  // create rect elements to store category labels
  let bars = this.barsGroup.selectAll('.label')
    .data(this.steps);

  // Enter
  bars
    .enter()
    .append('g')
    .attr('class', 'label');

  bars
    .append('rect')
    .attr('class', 'bar')
    .attr('height', d => this.height);

  bars
    .append("text")
    .attr("dy", ".35em")
    .attr("transform", null);

  // Enter + Update
  bars
    .select('.bar')
    .style('fill', 'white')
    .transition()
    .duration(750)
    .attr('width', function (d, i) {
      return this.width / this.steps.length;
    })
    .attr('x', function (d, i) {
      return this.width / this.steps.length * i;
    });

  bars
    .select('text')
    .transition()
    .duration(750)
    .attr('y', -this.margins.top + 6) // 6 seems to be a good number for font size
    .attr('x', function (d, i) {
      return this.width / this.steps.length * i + (this.width / this.steps.length) / 2;
    })
    .attr("text-anchor", function (d, i) {
      if (this.steps.length < 4) {
        return "middle";
      }
      else {
        return "end";
      }
    })
    .style('font-weight', 'bold')
    .text(function (d) {
      return d.label;
    });

  // Exit
  bars.exit().remove();

  return bars;

}


  private renderSankey(graph) {

  // the function for moving the nodes
  function dragmove(d) {
    d3.select(this).attr("transform",
      "translate(" + d.x + "," + (
        d.y = Math.max(0, Math.min(this.height - d.dy, d3.event.y))
      ) + ")");
    this.sankey.relayout();
    links.attr("d", this.path);
  }

  // Returns an event handler for fading a given chord group.
  // http://bl.ocks.org/mbostock/4062006
  function fade(opacity) {
    return function (selectedNode, i) {
      // loop through target links of the selected node and push to array
      let targetLinks = selectedNode.targetLinks.map(function (d) {
        return d.source.name;
      });

      // loop through source links of the selected node and push to array
      let sourceLinks = selectedNode.sourceLinks.map(function (d) {
        return d.target.name;
      });

      // get an array of nodes
      let nodes = this.svg.selectAll(".node");

      // filter an array of nodes that are not contained in targetLinks or sourceLinks
      let nonSiblingNodes = nodes.filter(function (node) {
        return node.name != graph.nodes[i].name && targetLinks.indexOf(node.name) < 0 && sourceLinks.indexOf(node.name) < 0;
      });
      nonSiblingNodes
        .transition('nodeFade') // assign a name to the transition to prevent other transitions from interfering
        .style("opacity", opacity);

      let links = this.svg.selectAll(".link");

      let siblingLinks = links.filter(function (d) {
        return d.source.name != graph.nodes[i].name && d.target.name != graph.nodes[i].name;
      });
      siblingLinks
        .transition('linkFade') // assign a name to the transition to prevent other transitions from interfering
        .style("opacity", opacity);


    };

  }

  // certain text will overlap due to the number of nodes at the lowest level of the graph
  // show text for the nodes that are within the top x% by value
  // construct an array of values from the graph to determine quantiles
  let valueRange = graph.links.map(function (d) {
    return d.value;
  });

  valueRange.sort(function (a, b) {
    return a - b;
  });

  let nodeNames = graph.nodes.map(function (d) {
    return d.name;
  });

  // http://jonathansoma.com/tutorials/d3/color-scale-examples/
  let color = d3.scale.ordinal().domain(nodeNames).range(colorbrewer.Dark2[8]);
  let quantile = d3.quantile(valueRange, this.p);
  console.log("The " + this.p + " quantile value is: " + quantile);

  this.sankey
    .nodes(graph.nodes)
    .links(graph.links)
    .layout(36);

  // Draw the links
  let links = this.linksGroup.selectAll(".link")
    .data(graph.links);

  // Enter
  links
    .enter()
    .append("path")
    .attr("class", "link");

  // Enter + Update
  links
    .sort(function (a, b) {
      return b.dy - a.dy;
    })
    .transition('pathDraw') // assign a name to the transition to prevent other transitions from interfering
    // .delay(750)
    .duration(750)
    .attr("d", this.path)
    // .transition('strokeWidth') // assign a name to the transition to prevent other transitions from interfering
    // .duration(250)
    .style("stroke-width", function (d) {
      return Math.max(1, d.dy);
    });

  // Exit
  links.exit().remove();

  // add in the nodes
  let nodes = this.nodesGroup.selectAll(".node")
    .data(graph.nodes);

  // Enter
  nodes.enter()
    .append("g")
    .attr("class", "node");

  nodes.append("rect")
    .attr("width", this.sankey.nodeWidth())
    .style('fill', '#ccc')
    .append("title");

  nodes.call(d3.behavior.drag()
    .origin(function (d) { return d; })
    .on("dragstart", function () {
      this.parentNode.appendChild(this);
    })
    .on("drag", dragmove));

  nodes.append("text")
    .attr("dy", ".35em")
    .style('fill', '#e5e5e5')
    .attr("transform", null);

  // Enter + Update
  nodes
    .transition('nodeTransform') // assign a name to the transition to prevent other transitions from interfering
    .duration(750)
    .attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

  // add the rectangles for the nodes
  nodes.select("rect")
    .attr("height", function (d) {
      return d.dy;
    })
    .transition('rectFill') // assign a name to the transition to prevent other transitions from interfering
    .delay(500)
    .duration(750)
    .style("fill", function (d, i) {
      return d.color = color(d.name.replace(/ .*/, ""));
    })
    .style("stroke", function (d) {
      return d3.rgb(d.color).darker(2);
    });

  nodes.select('text')
    .attr("x", function (d) {
      if (d.x < this.width - this.width / 3) {
        return 6 + this.sankey.nodeWidth();
      }
      else {
        return -6;
      }
    })
    .attr("text-anchor", function (d) {
      if (d.x < this.width - this.width / 3) {
        return "start";
      }
      else {
        return "end";
      }
    })
    .transition('yTextPosition') // assign a name to the transition to prevent other transitions from interfering
    .delay(250)
    .duration(750)
    .attr('y', function (d) {
      return d.dy / 2;
    })
    .style('fill', '#000000')
    .text(function (d) {
      // if (d.value > quantile || (d.x < width / 2)) {
      if (d.dy > 25) { // arbitrary number of <rect> height
        return d.name;
      }
      else {
        return null;
      }
    });

  nodes.exit().remove();

  //http://bl.ocks.org/frischmilch/7667996
  nodes
    .on("mouseover", fade(0.1))
    .on("mouseout", fade(1));

  return this.sankey;
}

}
