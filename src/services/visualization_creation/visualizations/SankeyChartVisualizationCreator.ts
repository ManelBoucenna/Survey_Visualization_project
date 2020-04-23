import { VisualizationDrawer } from '../VisualizationDrawer';
import { Sankey } from 'src/my-charts/SankeyChart';

export class SankeyChartVisualizationCreator extends VisualizationDrawer {
  graph;

  public Draw(): any {

    console.log('Sankey diagram');
    const Entry = this.Entries;
    const id = Entry.id.Value;

    // Define the hierarchical categories of the sankey
    const dims = [];
    const variables = [];

    Entry.Questions.forEach(element => {
      const dim = Entry.ndx.dimension(d => d[element.variable]);
      dims.push({label: element.variable, dimension: dim});
      variables.push(element.variable);
    });
    const sankeyDim = Entry.ndx.dimension(d => d);

    console.log('My group:', Entry.group);
    this.graph = document.getElementById(id);

    const figure = new Sankey(this.notificationService_, Entry.group);
    figure.Dimension(sankeyDim)
      .AllDimensions(dims)
      .Graph(this.graph)
      .Variables(variables);

    figure.render();
    return figure;
  }

}
