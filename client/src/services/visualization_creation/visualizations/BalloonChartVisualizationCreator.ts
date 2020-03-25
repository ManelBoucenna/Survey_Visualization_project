import { VisualizationDrawer } from '../VisualizationDrawer';
import { BalloonChart } from 'src/my-charts/BalloonChart';

// Visualization libraries
declare var Plotly: any;
import * as d3 from 'd3';

export class BalloonChartVisualizationCreator extends VisualizationDrawer {
  public Draw(): any {
    console.log("Balloon chart")
    const Entry = this.Entries;
    const id = Entry.id.Value;

    const dimension = Entry.ndx.dimension(d => [d[Entry.Questions[0].variable], d[Entry.Questions[1].variable]]);
    const DrawingDimension = Entry.ndx.dimension(d => [d[Entry.Questions[0].variable], d[Entry.Questions[1].variable]]);
    const group = DrawingDimension.group();
    const fixedGroup = this.StaticCopyGroup(group);
    const graph = d3.select("#" + id);

    const visualization = new BalloonChart(this.notificationService_, Entry.group);
    visualization.Dimension(dimension)
      .Graph(graph)
      .Group(group)
      .FixedGroup(fixedGroup);

    visualization.render();
    return visualization;
  }

}
