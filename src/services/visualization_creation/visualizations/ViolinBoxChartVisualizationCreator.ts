import { VisualizationDrawer } from '../VisualizationDrawer';
import { Category } from 'src/helpers/enums';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class ViolinBoxChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): any {
    console.log('Violin box diagram');
    const Entry = this.Entries;
    const id = Entry.id.Value;

    const notificationService = this.notificationService_;

    const categoricalVar = 'IMD1008_YEAR';
    const numericalVar = Entry.Questions[0].variable;
 
    const dimX = Entry.ndx.dimension(d => d[categoricalVar]);
    const groupY = dimX.group().reduce(
      (p, v) => {
        // Retrieve the data value, if not Infinity or null add it.
        const dv = v[numericalVar];
        if (dv !== Infinity && dv != null && dv > 0) { p.splice(d3.bisectLeft(p, dv), 0, dv); }
        return p;
      },
      (p, v) => {
        // Retrieve the data value, if not Infinity or null remove it.
        const dv = v[numericalVar];
        if (dv !== Infinity && dv != null && dv > 0) { p.splice(d3.bisectLeft(p, dv), 1); }
        return p;
      },
      () => {
        return [];
      }
    );

    // const dim = Entry.ndx.dimension(d => d[numerical_var]);
    // let rows = dim.top(Infinity);
    const figure = dc.boxPlot('#' + id);
    figure
      .width(320)
      .height(250)
      .dimension(dimX)
      .group(groupY)
      .tickFormat(d3.format('.1f'))
      .renderDataPoints(false)
      .renderTitle(true)
      .dataOpacity(1)
      .dataWidthPortion(2)
      .elasticY(false)
      .elasticX(false)
      ;
    figure.ordinalColors(['#1f77b4']);
    figure.colorAccessor((data) => data.key);
    figure.render();

    figure.on('renderlet', () => {
      figure.selectAll('g.box').on('click', e => {
        console.log(e.key);
        dimX.filter(d => d === e.key);
        notificationService.emit(Entry.group);
      });

      figure.selectAll('rect.box')
          .append('title')
          .text((d) => {
              return 'Mean: ' + d3.mean(d.value).toFixed(2) + '\n'
                  + 'Median: ' + d3.median(d.value).toFixed(2) + '\n'
                  + 'Min: ' + d3.min(d.value) + '\n'
                  + 'Max: ' + d3.max(d.value) + '\n'
          });
      figure.select('text')
          .attr('color', 'white')
    });
    return figure;
  }
}
