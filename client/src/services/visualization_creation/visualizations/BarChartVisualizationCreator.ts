import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
import { AutofillMonitor } from '@angular/cdk/text-field';

declare var Plotly: any;

export class BarChartVisualizationCreator extends VisualizationDrawer {
  dim: any;
  dim_range: any;
  group: any;
  id: any;
  graph: any;
  size: any;
  public Draw(): boolean {
    const Entry = this.Entries;
    this.id = Entry.id;
    const graph = dc.compositeChart("#"+ this.id);


    this.dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    this.group = this.dim.group().reduceCount();
    const staticGroup = super.StaticCopyGroup(this.group);
    this.size = [Entry.width, Entry.height, Entry.margins];


    const max = 1000;
    graph.compose([
      dc.barChart(graph)
        .dimension(this.dim)
        .group(staticGroup)
        .colors('#ccc') // same as .deselected
        .controlsUseVisibility(true)
        .barPadding(0.5)
        .centerBar(true),
      dc.barChart(graph)
        .dimension(this.dim)
        .group(this.group)
        .ordering((d) => -d.value)
        .controlsUseVisibility(true)
        .brushOn(false)
        .barPadding(0.5)
        .centerBar(true),
    ]);

    graph
      .width(this.size[0]).height(this.size[1]).margins(this.size[2])
      .dimension(this.dim)
      .group(this.group)
      .ordering((d) => -d.value)
      .x(d3.scaleBand())
      .xUnits(dc.units.ordinal)
      .brushOn(true)
      .elasticY(true)
      .elasticX(true);

    graph.xAxis().tickValues([]);
    graph.yAxis().tickValues([]);
    graph.render();
  //   this.react();
  //   this.graph.on('plotly_selected', this.dim_select);
  //   this.graph.on('plotly_doubleclick', this.dim_select);
  //   this.graph.on('plotly_selecting', this.dim_select);
    return true;
  }

  // private unpack(rows, key) {
  //   return rows.map(row => row[key]);
  // }

  // private getXY(arr) {
  //   return { x: this.unpack(arr, "key"), y: this.unpack(arr, "value") };
  // }

  // private makeBars(coords, range, onColor, offColor) {
  //   return {
  //     type: 'bar',
  //     x: coords.x,
  //     y: coords.y,
  //     width: [1],
  //     // marker: {
  //     //   color: coords.x.map(x => range[0] < x && x < range[1] ? onColor : offColor)
  //     // },
  //   };
  // }

  // private makeShapes(range) {
  //   return !isFinite(range[0]) ? null : [{
  //     type: 'rect', xref: 'x', yref: 'paper',
  //     x0: range[0], x1: range[1], y0: 0, y1: 1,
  //     fillcolor: '#d3d3d3', opacity: 0.2, line: { width: 0 }
  //   }]
  // }

  // //set up selection listeners
  // private dim_select(e) {
  //   this.dim_range = e ? [e.range.x[0], e.range.x[1]] : [-Infinity, Infinity];
  //   this.dim.filter(this.dim_range);
  //   this.react();
  // }

  // private react() {

  //   this.dim_range = [-Infinity, Infinity];
  //   const all_dim = this.getXY(this.group.all());
  //   // colors
  //   const in_all = "#66F",
  //     in_none = "#EEE",
  //     in_here = "#CCC",
  //     in_there = "#CCF";

  //   this.graph = document.getElementById(this.id);

  //   Plotly.react(this.graph, [
  //     this.makeBars(all_dim, this.dim_range, in_there, in_none),
  //     // this.makeBars(this.getXY(this.group.all()), this.dim_range, in_all, in_here)
  //   ],
  //     {
  //       width: 250, height: 100, margin: {r:0,b:15,t:10,l:20},
  //       selectdirection: "h",
  //       barmode: "overlay", 
  //       hovermode: true, 
  //       showlegend: false, 
  //       dragmode: "select",
  //       // shapes: this.makeShapes(this.dim_range),
  //       hoverinfo: "x",
  //       bargap :0.05,
  //       font: {
  //         size: 7,
  //         color: '#7f7f7f'
  //       },
  //       yaxis: {
  //         zeroline: false,
  //         gridwidth: 2
  //       },
  //     },
  //     { displayModeBar: false });
  // }

}
