import { VisualizationDrawer } from '../VisualizationDrawer';
import { Category } from 'src/helpers/enums';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

declare var Plotly: any;

export class ViolinChartVisualizationCreator extends VisualizationDrawer {

  public Draw(): boolean {
    console.log('Violin diagram');
    const Entry = this.Entries;
    const id = Entry.id.Value;

    let categorical_var = null;
    let numerical_var = null;

    if (Entry.Questions[0].category === Category.MultipleChoices) {
      categorical_var = Entry.Questions[0].variable;
      numerical_var = Entry.Questions[1].variable;
    } else {
      categorical_var = Entry.Questions[1].variable;
      numerical_var = Entry.Questions[0].variable;
    }

    const dim = Entry.ndx.dimension(d => d[numerical_var]);
    const rows = dim.top(Infinity);

    function unpack(rows, key) {
      return rows.map(function (row) { return row[key]; });
    }

    var data = [{
      type: 'violin',
      x: unpack(rows, categorical_var),
      y: unpack(rows, numerical_var),
      points: 'none',
      box: {
        visible: false
      },
      line: {
        color: 'grey',
      },
      meanline: {
        visible: true
      },
    }];

    const layout = {
      width: 250,
      height: 250,
      margin: {
        l: 10,
        r: 10,
        b: 20,
        t: 5,
        pad: 0
      },
      yaxis: {
        zeroline: false,
        automargin: true,
      }
    }

    Plotly.newPlot(id, data, layout);

    return true;
  }

}
