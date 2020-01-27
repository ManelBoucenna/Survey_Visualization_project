import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class StackedChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): boolean {
    const Entry = this.Entries;
    const id = '#' + Entry.id;

    //dimensions and groups:
    const years = Entry.ndx.dimension(d => d['IMD1008_YEAR']);
    const yearsGroup = years.group().reduce(
      function reduceAdd(p, v) {
        const variable = Entry.Questions[0].variable;
        p[variable] = p[variable] + v[variable];
        p.count = p.count + 1;
        p.avg = p[variable] / p.count;
        p.avgTot = p.avgTot + p.avg;
        p.avgPrcnt = (p.avg / p.avgTot) * 100;
        if (p.max < v[variable]) { p.max = v[variable]; }
        p.maxTot = p.maxTot + p.max;
        p.maxPrcnt = (p.max / p.maxTot) * 100;
        return p;
      },
      function reduceRemove(p, v) {
        const variable = Entry.Questions[0].variable;
        p[variable] = p[variable] - v[variable];
        p.count = p.count - 1;
        p.avg = p[variable] / p.count;
        p.avgTot = p.avgTot - p.avg;
        p.avgPrcnt = (p.avg / p.avgTot) * 100;
        if (p.max > v[variable]) { p.max = v[variable]; }
        p.maxTot = p.maxTot - p.max;
        p.maxPrcnt = (p.max / p.maxTot) * 100;
        return p;
      },
      function reduceInitial() {
        const variable = Entry.Questions[0].variable;
        return {
          variable: 0, count: 0, avg: 0, avgTot: 0,
          avgPrcnt: 0, max: 0, maxTot: 0, maxPrcnt: 0
        };
      });

    const graph = dc.barChart(id);
    // const width = Entry.width;
    // const height = Entry.height;
    // const margins = Entry.margins;

    const width = 100;
    const height = 100;
    const margins = { left: 15, right: 0, top: 0, bottom: 5 };

    graph.width(width).height(height).margins(margins)
      .dimension(years)
      .group(yearsGroup)
      .valueAccessor(d => d.value.avgPrcnt)
      .stack(yearsGroup, 'Survey max %', d => d.value.maxPrcnt)
      // .x(d3.scale.ordinal().domain(data.map(function (d) {
      //   return d.channelUUID;
      // })))
      .x(d3.scaleBand())
      .xUnits(dc.units.ordinal)
      .xAxisLabel('Years')
      .yAxisLabel('Survey values %')
      .brushOn(false)
      .elasticY(true)
      .renderHorizontalGridLines(true);

    graph.render();
    return true;
  }


}
