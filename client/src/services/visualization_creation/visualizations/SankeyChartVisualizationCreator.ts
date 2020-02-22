import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';

declare var Plotly: any;
export class SankeyChartVisualizationCreator extends VisualizationDrawer {
  graph;
  public Draw(): boolean {

    console.log('Sankey diagram');
    const Entry = this.Entries;
    const id = Entry.id.Value;

    // Define the hierarchical categories of the sankey
    const dims = [];
    const groups = [];
    const steps = [];
    const variables = [];

    Entry.Questions.forEach(element => {
      const dim = Entry.ndx.dimension(d => d[element.variable]);
      const group = dim.group().reduceCount();
      dims.push(dim);
      groups.push(group);

      steps.push({ name: element.variable, label: element.variable });
      variables.push(element.variable);
    });
    const sankeyDim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    const DIM = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    const GROUP = DIM.group().reduceCount();

    const width = 500//Entry.width;
    const height = 500//Entry.height;
    const margins = Entry.margins;

    var allDim = sankeyDim.top(Infinity);

    // Colors
    var color = new Int8Array(allDim.length);
    var colorscale = [[0, 'gray'], [1, 'firebrick']];



    react();
    this.graph = document.getElementById(id);
    this.graph.on('plotly_click', update_color);
    this.graph.on('plotly_selected', info);
    this.graph.on('plotly_doubleclick', info);
    this.graph.on('plotly_selecting', info);


    return true;

    function info(e) {
      console.log(e);
    }
    function react() {
      var traces = [
        {
          type: 'parcats',
          // domain: {y: [0, 0.4]},
          dimensions: getCategories(allDim),
          line: {
            colorscale: colorscale,
            cmin: 0,
            cmax: 1,
            color: color,
            shape: 'hspline'
          },
          labelfont: { size: 10 }
        }
      ];

      var layout = { width: 500, height: 400, margin: 0 };

      Plotly.react(id, traces, layout);
    }

    function transformToGraph(data) {

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

    function getCategories(arr) {
      const dimensions = [];
      variables.forEach(element => {
        const object = {
          label: element,
          values: arr.map(el => el[element])
        };
        dimensions.push(object);
      });
      return dimensions;
    }

    function update_color(points_data) {
      var allDim = sankeyDim.top(Infinity);
      // Colors
      var new_color = new Int8Array(allDim.length);
      for (var i = 0; i < points_data.points.length; i++) {
        new_color[points_data.points[i].pointNumber] = 1;
      }
      Plotly.restyle(id, { 'line.color': [new_color] });
    }
  }

}
