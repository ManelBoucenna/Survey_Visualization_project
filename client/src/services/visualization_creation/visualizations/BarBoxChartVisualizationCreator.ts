import { VisualizationDrawer } from '../VisualizationDrawer';
import { BarBoxChart } from 'src/my-charts/BarBoxChart';

// Visualization libraries

declare var Plotly: any;

export class BarBoxChartVisualizationCreator extends VisualizationDrawer {

  public Draw(): any {
    const Entry = this.Entries;
    const id = Entry.id.Value;

    // Crossfilter dimension and group setup
    const variable = Entry.Questions[0].variable;
    const dim = Entry.ndx.dimension(d => d[variable]);
    const group = Entry.ndx.dimension(d => d[variable]).group();

    // DOM objects for rendering
    const figure: any = document.getElementById(id);
    const graph = new BarBoxChart(Entry.group);
    graph.Dimension(dim)
      .Group(group)
      .Variable(variable)
      .Graph(figure);

    graph.render();
    return graph;


  }

}
