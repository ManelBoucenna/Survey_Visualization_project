import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
import {
  sankey as d3Sankey,
  sankeyLinkHorizontal as sankeyLinkHorizontal
} from 'd3-sankey';
import { rgb } from "d3-color";
// import * as colorbrewer from 'colorbrewer';
declare var Plotly: any;
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
  id;
  variables = [];
  DIM;
  GROUP;
  graph;
  // Return only 1 - p quantile to reduce possibility of overlapping text
  // Define p as an arbitrary number between [0,1]
  p = 0.8;
  public Draw(): boolean {

    console.log('Sankey diagram')
    const Entry = this.Entries;
    const id = Entry.id;
    this.id = Entry.id;


    // Define the hierarchical categories of the sankey

    const dims = [];
    const groups = [];

    Entry.Questions.forEach(element => {
      const dim = Entry.ndx.dimension(d => d[element.variable]);
      const group = dim.group().reduceCount();
      dims.push(dim);
      groups.push(group);

      this.steps.push({ name: element.variable, label: element.variable });
      this.variables.push(element.variable);
    });
    const sankeyDim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    this.DIM = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    this.GROUP = this.DIM.group().reduceCount();
    console.log(this.DIM)
    this.width = 500//Entry.width;
    this.height = 500//Entry.height;
    this.margins = Entry.margins;

    // let color = d3.scaleOrdinal(["MALE"], ["#da4f81"]).unknown("#ccc");

    // // append the svg canvas to the page
    // this.svg = d3.select('#' + id).append('svg')
    //   .attr('width', this.width + this.margins.left + this.margins.right)
    //   .attr('height', this.height + this.margins.top + this.margins.bottom)
    //   .append('g')
    //   .attr('transform',
    //     'translate(' + this.margins.left + ',' + (+this.margins.top) + ')');

    // // Set the sankey diagram properties 
    // this.sankey = d3Sankey()
    //   .nodeSort(null)
    //   .linkSort(null)
    //   .nodeWidth(4)
    //   .nodePadding(20)
    //   .size([this.width, this.height]);

    // // set sankey graph data
    // set sankey graph data
    // let graph = this.transformToGraph(sankeyDim.top(Infinity));
    console.log("In creation:", id);
    this.graph = document.getElementById(id);
    var allDim = sankeyDim.top(Infinity);
    // Colors
    var color = new Int8Array(allDim.length);
    var colorscale = [[0, 'gray'], [1, 'firebrick']];

    var traces = [
      {type: 'parcats',
       // domain: {y: [0, 0.4]},
       dimensions:this.getCategories(allDim),
       line: {
         colorscale: colorscale,
         cmin: 0,
         cmax: 1,
         color: color,
         shape: 'hspline'},
       labelfont: {size: 10}
      }
    ];

    var layout = { width: 500, height: 400, margin:0};

    Plotly.newPlot(id, traces, layout);

    var update_color = function (points_data) {
      var allDim = sankeyDim.top(Infinity);
      // Colors
      var new_color = new Int8Array(allDim.length);
      for(var i = 0; i < points_data.points.length; i++) {
        new_color[points_data.points[i].pointNumber] = 1;
      }
      console.log(new_color)
      // Update color of selected paths in parallel categories diagram
      Plotly.restyle(id, { 'line.color': [new_color] });
    }
    // this.graph.on('plotly_selected', update_color);
    this.graph.on('plotly_click', update_color);

    // const { nodes, links } = this.sankey({
    //   nodes: graph.nodes.map(d => Object.assign({}, d)),
    //   links: graph.links.map(d => Object.assign({}, d))
    // });

    // this.svg.append("g")
    //   .selectAll("rect")
    //   .data(nodes)
    //   .join("rect")
    //   .attr("x", d => d.x0)
    //   .attr("y", d => d.y0)
    //   .attr("height", d => d.y1 - d.y0)
    //   .attr("width", d => d.x1 - d.x0)
    //   .append("title")
    //   .text(d => `${d.name}\n${d.value.toLocaleString()}`);

    // this.svg.append("g")
    //   .attr("fill", "none")
    //   .selectAll("g")
    //   .data(links)
    //   .join("path")
    //   .attr("d", sankeyLinkHorizontal())
    //   .attr("stroke", d => color(d.names[0]))
    //   .attr("stroke-width", d => d.width)
    //   .style("mix-blend-mode", "multiply")
    //   .append("title")
    //   .text(d => `${d.names.join(" → ")}\n${d.value.toLocaleString()}`);

    // this.svg.append("g")
    //   .style("font", "10px sans-serif")
    //   .selectAll("text")
    //   .data(nodes)
    //   .join("text")
    //   .attr("x", d => d.x0 < this.width / 2 ? d.x1 + 6 : d.x0 - 6)
    //   .attr("y", d => (d.y1 + d.y0) / 2)
    //   .attr("dy", "0.35em")
    //   .attr("text-anchor", d => d.x0 < this.width / 2 ? "start" : "end")
    //   .text(d => d.name)
    //   .append("tspan")
    //   .attr("fill-opacity", 0.7)
    //   .text(d => ` ${d.value.toLocaleString()}`);

    // this.svg.node();
    return true;
  }

  private transformToGraph(data) {

    const d = {
      nodes: [],
      links: []
    };

    let n = [];
    let l = [];
    let si;
    let ti;

    for (let i = 0; i < this.steps.length - 1; i++) {

      const sg = this.steps[i].name;
      const tg = this.steps[i + 1].name;
      const relations = d3.nest()
        .key(d => d[sg])
        .key(d => d[tg])
        .entries(data);

      // console.log(relations)
      relations.forEach(s => {
        si = getNodeIndex(n, s.key, sg);

        if (si === -1) {
          n.push({
            name: s.key,
            group: sg
          });
          si = n.length - 1;
        }

        s.values.forEach(t => {
          ti = getNodeIndex(n, t.key, tg);
          if (ti === -1) {
            n.push({
              name: t.key,
              group: tg
            });
            ti = n.length - 1;
          }

          let value = t.values.length
          let link = {
            source: n[si],
            target: n[ti],
            names: [s.key, t.key],
            value: value
          };
          l.push(link);
        });
      });
    }
    d.nodes = n.sort(customSort);
    l.forEach(function (d) {
      d.source = n.indexOf(d.source);
      d.target = n.indexOf(d.target);
    });
    d.links = l;

    function customSort(a, b) {
      let Item1 = a.group;
      let Item2 = b.group;
      if (Item1 != Item2) {
        return (Item1.localeCompare(Item2));
      }
      else {
        return (a.name.localeCompare(b.name));
      }
    }

    function getNodeIndex(array, name, group) {
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
  private SankeyPlotly() {

  }

  private getCategories(arr) {
    const dimensions = [];
    this.variables.forEach(element => {
      const object = {
        label: element,
        values: arr.map(el => el[element])
      };
      dimensions.push(object);
    });
    console.log(dimensions);
    return dimensions;
  }

  //set up selection listeners
  private dim_select(e) {
    console.log(e)
    // const DIM_RANGE = e ? [e.range.x[0], e.range.x[1]] : [-Infinity, Infinity];
    // this.DIM.filter(this.dim_range);
    // this.SankeyPlotly();
  }

  private update_color(points_data) {
    // Colors
    var new_color = new Int8Array(1000);
    this.graph = document.getElementById(this.id);
    console.log(this.id)
    console.log(this.graph)
    // Update color of selected paths in parallel categories diagram
    Plotly.restyle(this.graph, { 'line.color': [new_color] }, 1);
  }
}
