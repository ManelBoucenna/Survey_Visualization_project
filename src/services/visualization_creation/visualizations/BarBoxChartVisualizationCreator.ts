import { VisualizationDrawer } from '../VisualizationDrawer';
import { BarBoxChart } from 'src/my-charts/BarBoxChart';

// Visualization libraries

import * as d3 from 'd3';
import * as dc from 'dc';
export class BarBoxChartVisualizationCreator extends VisualizationDrawer {

  public Draw(): any {
    const Entry = this.Entries;
    const id = Entry.id.Value;

    // Crossfilter dimension and group setup
    const variable = Entry.Questions[0].variable;
    const dimBar = Entry.ndx.dimension(d => d[variable]);
    const dimBox = Entry.ndx.dimension(d => '');
    const group = Entry.ndx.dimension(d => d[variable]).group();

    // DOM objects for rendering
    const figure: any = document.getElementById(id);
    const graph = new BarBoxChart(Entry.group);
    graph.Dimension(dimBar)//, dimBox)
      .Group(group)
      //.Id(id)
      .Variable(variable)
      .Graph(figure);

    graph.render();
    return graph;


  }

}
