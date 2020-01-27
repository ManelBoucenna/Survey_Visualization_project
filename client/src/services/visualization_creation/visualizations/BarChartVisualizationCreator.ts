import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class BarChartVisualizationCreator extends VisualizationDrawer {

  public Draw(): boolean {
    const Entry = this.Entries;
    const id = '#' + Entry.id;
    const graph = dc.compositeChart(id);


    const dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    const group = dim.group().reduceCount();

    const staticGroup = super.StaticCopyGroup(group);
    const width = Entry.width;
    const height = Entry.height;
    const margins = Entry.margins;
    const max = 1000;
    graph.compose([
      dc.barChart(graph)
        .dimension(dim)
        .group(staticGroup)
        .colors('#ccc') // same as .deselected
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
      .width(width).height(height).margins(margins)
      .dimension(dim)
      .group(group)
      .ordering((d) => -d.value)
      .x(d3.scaleBand())
      .xUnits(dc.units.ordinal)
      .brushOn(true)
      .elasticY(true)
      .elasticX(true);

    graph.xAxis().tickValues([]);
    graph.yAxis().tickValues([]);
    graph.render();
    return true;
  }

}
