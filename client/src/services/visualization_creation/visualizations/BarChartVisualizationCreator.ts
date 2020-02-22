import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class BarChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): boolean {
    console.log("Bar chart")

    const Entry = this.Entries;
    const id = Entry.id;
    const graph = dc.compositeChart("#" + id.Value);


    const dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
    const max = dim.top(Infinity).length;
    const group = dim.group().reduceCount();
    group.all().forEach((item, index) => {
      item["value"] = (item["value"] * 100 / max).toFixed(2);
    });
    const staticGroup = super.StaticCopyGroup(group);
    const size = [Entry.width, Entry.height, Entry.margins];


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
        // .ordering((d) => -d.value)
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
      .xUnits(dc.units.ordinal);
    graph.y(d3.scaleLinear().domain([0, 100]))
    graph.brushOn(true)
      .renderHorizontalGridLines(true)
      .renderLabel(true);

    graph.xAxis().tickValues([]);
    graph.yAxis().tickValues([50]);
    graph.render();

    return true;
  }

}
