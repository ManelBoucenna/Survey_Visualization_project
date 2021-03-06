import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class CountriesChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): any {
    console.log('Country diagram');
    const Entry = this.Entries;
    const id = Entry.id.Value;
    const width = document.getElementById(id).getBoundingClientRect().width;
    const variable = Entry.Questions[0].variable;
    const graph = dc.compositeChart('#' + id);

    const dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    const dimReset =  Entry.ndx.dimension(d => '');

    const max = dim.top(Infinity).length;
    const group = dim.group().reduceCount();
    const staticGroup = super.StaticCopyGroup(group);
    const margin = { left: 5, right: 5, top: 10, bottom: 30 };
    const size = [width , 90, margin];

    graph.compose([
      dc.barChart(graph)
        .dimension(dim)
        .group(staticGroup)
        .colors('#ccc')// same as .deselected
        .controlsUseVisibility(true)
        .barPadding(0.7),
      //.centerBar(true),
      dc.barChart(graph)
        .dimension(dim)
        .group(group)
        .barPadding(0.7),
      //.centerBar(true),
    ]);

    graph
      .width(size[0]).height(size[1])
      .margins(size[2])
      .dimension(dim)
      .group(group)
      .ordering((d) => -d.value)
      .x(d3.scaleBand())
      .xUnits(dc.units.ordinal)
      .y(d3.scaleLinear().domain([0, 100]))
      .brushOn(false)
      .renderHorizontalGridLines(true)
      .xAxisLabel('');

    graph.on('renderlet', function (chart) {
      // rotate x-axis labels
      graph.selectAll('g.x g.tick text')
        .attr('transform', 'translate(-10,0) rotate(40)')
        .style('text-anchor', 'start');
      graph.selectAll('g.axis.y')
          .attr('display', 'none')
    });

    // graph.xAxis().tickValues([]);
    graph.y(d3.scaleLinear().domain([0, max]));
    graph.yAxis().tickValues([(max / 2).toFixed(0), max]);

    graph.render();
    return {
      'graph': graph,
      'dim': dimReset
    }
  }
}
