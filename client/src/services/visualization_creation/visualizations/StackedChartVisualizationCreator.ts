import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class StackedChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): any {
    const Entry = this.Entries;
    const id = '#' + Entry.id.Value;
    const notificationService = this.notificationService_;

    // Dimensions and groups:
    const variable = Entry.Questions[0].variable;
    const dim = Entry.ndx.dimension(d => [d.IMD1008_YEAR, d[variable]]);
    const options = [...new Set(dim.group().all().map(d => d.key[1]))];

    const xdim = Entry.ndx.dimension(d => d.IMD1008_YEAR);
    const group = xdim.group().reduceCount().all();
    let max = -Infinity;
    group.forEach(elem => {
      if (elem.value > max) {
        max = elem.value;
      }
    });
    const numGroup = group.length;
    const numLabels = Entry.ndx.dimension(d => d[variable]).group().reduceCount().all().length;
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
    const width = numGroup * 60;
    const height = 300;
    const margins = { left: 40, right: 0, top: 17 * numLabels, bottom: 40 };
    let start = 0;
    for (const [key, value] of Object.entries(options)) {
      if (start === 0) {
        graph.width(width).height(height).margins(margins)
          .dimension(xdim)
          .group(ydim, value, sel_stack(value))
          .x(d3.scaleOrdinal().domain(xdim))
          .xUnits(dc.units.ordinal)
          .renderHorizontalGridLines(true)
          .renderLabel(false)
          .brushOn(false)
          .title(function (d) {
            const key = group.find(x => x.key == d.key).value;
            const percentage = (d.value[this.layer] * 100 / key).toFixed(2);
            return d.key + ': ' + key + '\n'
              + this.layer + ': ' + d.value[this.layer] + '\n'
              + 'Purcentage: ' + percentage + '%';
          });
        start += 1;
      } else {
        graph.stack(ydim, value, sel_stack(value));
      }
    }

    graph.yAxis().ticks(3).tickFormat(d => String(d));
    graph.y(d3.scaleLinear().domain([0, max]));

    graph.on('renderlet', function (chart) {
      graph.selectAll('g.x g.tick text')
        .attr('transform', 'translate(0,0) rotate(40)')
        .style('text-anchor', 'start');

      chart.selectAll('rect.bar').on('dblclick', function (d) {
        dim.filter(elem => (elem[0] === d.x && elem[1] === d.layer));
        notificationService.emit(Entry.group);
      });
      chart.selectAll('rect.bar').on('lclick', function (d) {
        notificationService.emit(Entry.group);
      });
    });
    graph.legend(dc.legend());
    graph.render();
    return graph;
  }


}
