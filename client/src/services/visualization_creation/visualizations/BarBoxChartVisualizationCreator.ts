import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
declare var Plotly: any;

export class BarBoxChartVisualizationCreator extends VisualizationDrawer {

  public Draw(): boolean {
    console.log("Bar Box")
    const Entry = this.Entries;
    const id = Entry.id.Value;

    const dimX = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);


    const BarX = unpack(dimX.group().reduceCount().all(), "key");
    const BarY = unpack(dimX.group().reduceCount().all(), "value");
    const boxData = unpack(dimX.top(Infinity),Entry.Questions[0].variable);

    var trace1 = {
      x: BarX,
      y: BarY,
      type: 'bar',
    };

    var trace2 = {
      x: boxData,
      type: 'box',
      xaxis:"x2",
      yaxis:"y2"
    };

    var data = [trace1, trace2];

    var layout = {
      showlegend: false,
      width: 250,
      height: 300,
      margin: {
        l: 25,
        r: 10,
        b: 15,
        t: 0,
        pad: 0
      },
      grid: {
        rows: 2,
        columns: 1,
        pattern: 'independent'}
    };

    Plotly.newPlot(id, data, layout);

    return true;

    function unpack(rows, key) {
      return rows.map(function (row) { return row[key]; });
    }

  }

}
