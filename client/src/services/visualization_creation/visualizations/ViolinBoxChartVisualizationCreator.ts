import { VisualizationDrawer } from '../VisualizationDrawer';
import { Category } from 'src/helpers/enums';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
declare var Plotly: any;

export class ViolinBoxChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): any {
    console.log('Violin box diagram');
    const Entry = this.Entries;
    const id = Entry.id.Value;

    let categorical_var = null;
    let numerical_var = null;

    categorical_var = "IMD1008_YEAR";
    numerical_var = Entry.Questions[0].variable;

    const dim = Entry.ndx.dimension(d => d[numerical_var]);
    let rows = dim.top(Infinity);

    let figure: any = document.getElementById(id);
    function unpack(rows, key) {
      return rows.map(function (row) { return row[key]; });
    }
    function react() {
      var data = [{
        type: 'violin',
        x: unpack(rows, categorical_var),
        y: unpack(rows, numerical_var),
        points: 'none',
        box: {
          visible: true
        },
        line: {
          color: 'grey',
        },
        meanline: {
          visible: true
        }
      }]

      let layout = {
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
      };

      return Plotly.react(id, data, layout);
    }

    react();
    function onUpdate(e) {
      console.log("EVENT")
      // react();
      return true;
    }

    figure.on('plotly_click', onUpdate);
    figure.on('plotly_selected', onUpdate);
    figure.on('plotly_doubleclick', onUpdate);
    figure.on('plotly_selecting', onUpdate);


    return figure;

  }
}
