import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
declare var Plotly: any;

export class BalloonChartVisualizationCreator extends VisualizationDrawer {

  public Draw(): boolean {
    console.log("Balloon chart")
    const Entry = this.Entries;
    const id = Entry.id;

    const dimX = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    const dimY = Entry.ndx.dimension(d => d[Entry.Questions[1].variable]);

    const rows = dimX.top(Infinity);

    const OptionsX = unpack(dimX.group().reduceCount().all(), "key");
    const OptionsY = unpack(dimY.group().reduceCount().all(), "key");

    var data = DrawTraces(OptionsX, OptionsY);

    var layout = {
      showlegend: false,
      // height: 350,
      hovermode:'closest',
      width: 300,
      yaxis:{
        automargin: true,
      },
      xaxis:{
        automargin: true,
      },
      color: "blue",
      font: {
        family: 'Courier New, monospace',
        size: 9,
        color: '#7f7f7f'
      },
      margin:{
        t: 5,
        r: 5
      }
    };

    Plotly.newPlot(id, data, layout, { displayModeBar: false });
    return true;

    function FindSize(xArr, yElem) {
      const Size = [];
      xArr.forEach(xElem => {
        const filtered = rows.filter(d =>
          d[Entry.Questions[0].variable] === xElem && d[Entry.Questions[1].variable] === yElem);
        Size.push(filtered.length);
      });
      return Size;
    }

    function unpack(rows, key) {
      return rows.map(function (row) { return row[key]; });
    }

    function DrawTraces(xArr, Yarr) {
      const object = [];
      const data = [];
      let sizes = [];
      Yarr.forEach(Yelem => {
        const size = FindSize(xArr, Yelem);
        object.push({
          x: xArr,
          y: Array.from({ length: xArr.length }, () => Yelem),
          size: size
        });
        sizes = sizes.concat(size);
      });

      const MaxSize = Math.max.apply(null, sizes);
      const MinSize = Math.min.apply(null, sizes);
      object.forEach(elem => {
        const trace = {
          x: elem.x,
          y: elem.y,
          mode: 'markers',
          marker: {
            color: "blue",
            opacity: 0.7,
            size: elem.size.map(x => (45 - 5) * (x - MinSize) / (MaxSize - MinSize) + 5),
          },
          text: elem.size.map(x => String(x)),
        };
        data.push(trace);
      });


      return data;
    }

  }

}
