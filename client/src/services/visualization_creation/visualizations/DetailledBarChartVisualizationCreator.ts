import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class DetailledBarChartVisualizationCreator extends VisualizationDrawer {
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
    const margin = { left: 5, right: 5, top: 5, bottom: 45 }
    const size = [300, 100, margin];


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
      // .margins(size[2])
      .dimension(dim)
      .group(group)
      .ordering((d) => -d.value)
      .x(d3.scaleBand())
      .xUnits(dc.units.ordinal)
      .y(d3.scaleLinear().domain([0, 100]))
      .brushOn(false)
      .renderHorizontalGridLines(true)
      .xAxisLabel('');

    // graph.xAxis().tickValues([]);
    graph.yAxis().tickValues([50]);

    graph.on("renderlet", function (chart) {
      // rotate x-axis labels
      graph.selectAll('g.tick text')
        .attr('transform', 'rotate(45)')
        .style("text-anchor", "start");
    });
    graph.render();


    return true;
  }

}
