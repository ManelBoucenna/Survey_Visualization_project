import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
declare var Plotly: any;

export class BarBoxChartVisualizationCreator extends VisualizationDrawer {

  public Draw(): boolean {
    console.log('Bar Box')
    const Entry = this.Entries;
    const id = Entry.id.Value;

    const dimX = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    const group = dimX.group().reduceCount().all();

    const BarX = unpack(group, 'key');
    const BarY = unpack(group, 'value');
    const boxData = unpack(dimX.filter(d => (d > 0)).top(Infinity), Entry.Questions[0].variable);

    function colors(array) {
      const color = [];
      array.forEach(element => {
        if (element > 0) { color.push('rgb(166,206,227)'); }
        else color.push('rgb(227,26,28)')
      });
      return color
    }

    function categories(array) {
      const category = [];
      array.forEach(element => {
        if (element > 0) { category.push('Ratings'); }
        else category.push('Other')
      });
      return category
    }

    const trace1 = {
      x: [categories(BarX), BarX],
      y: BarY,
      type: 'bar',
      marker: { color: colors(BarX) }
    };

    const trace2 = {
      x: boxData,
      type: 'box',
      xaxis: 'x2',
      yaxis: 'y2'
    };

    var data = [trace1, trace2];

    var layout = {
      showlegend: false,
      width: 250,
      height: 300,
      margin: {
        l: 25,
        r: 10,
        b: 20,
        t: 0,
        pad: 0
      },
      grid: {
        rows: 2,
        columns: 1,
        pattern: 'independent'
      },
      // xaxis: {range: [-2, 4]},
      xaxis2: {range: [-2, 3]},
    };

    Plotly.newPlot(id, data, layout);

    return true;

    function unpack(rows, key) {
      return rows.map(function (row) { return row[key]; });
    }

  }

}
