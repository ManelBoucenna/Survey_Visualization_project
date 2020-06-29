import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class DetailledBarChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): any {
    console.log('detailled Bar chart');

    const Entry = this.Entries;
    const id = Entry.id;
    const graph = dc.compositeChart('#' + id.Value);
    let filter = [];

    const dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    const dimFilter = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);

    const max = dim.top(Infinity).length;
    const group = dim.group().reduceCount();
    const numGROUPS = group.all().length;
    const staticGroup = super.StaticCopyGroup(group);
    const margin = { left: 45, right: 5, top: 5, bottom: 45 };
    let width = 0;
    if (numGROUPS < 4) {
      width = 200;
    } else {
      width = numGROUPS * 60;
    }
    const size = [width, 200, margin];
    const notificationService = this.notificationService_;
    graph.compose([
      dc.barChart(graph)
        .dimension(dim)
        .group(staticGroup)
        .colors('#ccc')// same as .deselected
        .controlsUseVisibility(true)
        .barPadding(0.7)
        .centerBar(true),
      dc.barChart(graph)
        .dimension(dim)
        .group(group)
        .barPadding(0.7)
        .centerBar(true),
    ]);

    graph
      .width(size[0]).height(size[1])
      .margins(size[2])
      .dimension(dim)
      .group(group)
      // .ordering((d) => -d.value)
      .x(d3.scaleBand())
      .xUnits(dc.units.ordinal)
      .y(d3.scaleLinear().domain([0, 150]))
      .brushOn(false)
      .renderHorizontalGridLines(true)
      .xAxisLabel('');

    // graph.xAxis().tickValues([]);
    graph.yAxis().ticks(3);

    graph.on("renderlet", function (chart) {
      // rotate x-axis labels
      graph.selectAll('g.x g.tick text')
        .attr('transform', 'translate(-10,0) rotate(40)')
        .style("text-anchor", "start");

      graph.selectAll('g.stack._0 rect.bar').on('click', e => {

        if (filter.includes(e.x)) {
          filter = filter.filter((value) => value !== e.x);
        } else {
          filter.push(e.x);
        }
        if (filter.length > 0) {
          dimFilter.filterFunction(A => {
            let temp = null;
            filter.forEach(elem => {
              if (temp == null) {
                temp = (A === elem);
              } else {
                temp = temp || (A === elem);
              }
            });
            return temp;
          });
        } else { dimFilter.filterAll(); }
        notificationService.emit(Entry.group);
      });

    });


    graph.render();
    return graph;
  }

}
