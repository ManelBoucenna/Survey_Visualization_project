import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class BarChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): any {

    console.log('Bar chart');

    const Entry = this.Entries;
    const id = Entry.id;
    const width = document.getElementById(Entry.id.Value).getBoundingClientRect().width;
    const graph = dc.compositeChart('#' + id.Value);
    // Crossfilter dimension and group setups
    const dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    const dimReset = Entry.ndx.dimension(d => '');
    const group = dim.group().reduceCount();
    let maxi = 0;
    group.all().forEach(element => {
      if (element.value > maxi) {
        maxi = element.value;
      }
    });
    const middle = (maxi / 2).toFixed(0);

    const staticGroup = super.StaticCopyGroup(group);
    const margin = { left: 5, right: 5, top: 2, bottom: 5 };
    const size = [width, 55, margin];


    graph.compose([
      dc.barChart(graph)
        .dimension(dim)
        .group(staticGroup)
        .colors('#ccc')// same as .deselected
        .controlsUseVisibility(true)
        .barPadding(0.5)
        .centerBar(true),
      dc.barChart(graph)
        .dimension(dim)
        .group(group)
        .ordering((d) => -d.value)
        .controlsUseVisibility(true)
        .brushOn(false)
        .barPadding(0.5)
        .centerBar(true),
    ]);

    graph
      .width(size[0]).height(size[1]).margins(size[2])
      .dimension(dim)
      .group(group)
      .ordering((d) => -d.value)
      .x(d3.scaleBand())
      .xUnits(dc.units.ordinal)
      .brushOn(true);


    graph.y(d3.scaleLinear().domain([0, maxi]));
    graph.renderHorizontalGridLines(true);

    graph.xAxis().tickValues([]);
    graph.yAxis().tickValues([middle, maxi]);

    graph.on('renderlet', (chart) => {
      graph.selectAll('g.axis.y')
        .attr('display', 'none')
    });

    graph.render();

    return {
      'graph': graph,
      'dim': dimReset
    }
  }

}
