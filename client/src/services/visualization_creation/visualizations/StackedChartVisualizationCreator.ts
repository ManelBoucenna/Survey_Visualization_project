import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class StackedChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): boolean {
    const Entry = this.Entries;
    const id = '#' + Entry.id.Value;
    const options = Entry.Questions[0].Options;

    //dimensions and groups:
    const variable = Entry.Questions[0].variable;
    const xdim = Entry.ndx.dimension(d => d['IMD1008_YEAR']);
    const ydim = xdim.group().reduce(
      function (p, v) {
        p[v[variable]] = (p[v[variable]] || 0) + 1;
        return p;
      },
      function (p, v) {
        p[v[variable]] = (p[v[variable]] || 0) - 1;
        return p;
      },
      function () {
        return {};
      });

    function sel_stack(valueKey) {
      return function (d) {
        return d.value[valueKey];
      };
    }


    const graph = dc.barChart(id);
    // const width = Entry.width;
    // const height = Entry.height;
    // const margins = Entry.margins;

    const width = 200;
    const height = 200;
    const margins = { left: 50, right: 0, top: 0, bottom: 20 };
    let start = 0;
    for (const [key, value] of Object.entries(options)) {

      if (start === 0) {
        console.log(value, ':', sel_stack(value))
        graph.width(width).height(height).margins(margins)
          .dimension(xdim)
          .group(ydim, value, sel_stack(value))
          .x(d3.scaleOrdinal().domain(xdim))
          .xUnits(dc.units.ordinal)
          .renderHorizontalGridLines(true)
          .elasticY(true)
          .elasticX(true)
          .renderLabel(true)
          .renderTitle(true)
        // .legend(dc.legend());
        start += 1;
      } else {
        console.log(value, ':', sel_stack(value));
        graph.stack(ydim, value, sel_stack(value))
      }
    }

    graph.render();
    return true;
  }


}
