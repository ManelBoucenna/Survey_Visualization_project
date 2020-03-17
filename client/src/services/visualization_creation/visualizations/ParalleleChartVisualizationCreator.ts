import { VisualizationDrawer } from '../VisualizationDrawer';
import { ParallelCoordinates } from 'src/my-charts/PCPChart';

export class ParalleleChartVisualizationCreator extends VisualizationDrawer {

    public Draw(): any {
        console.log('Parallel chart');
        const Entry = this.Entries;
        const id = Entry.id.Value;
        const dims = [];
        const variables = [];

        Entry.Questions.forEach(element => {
            const dim = Entry.ndx.dimension(d => d[element.variable]);
            dims.push(dim);
            variables.push(element.variable);
        });

        const pcpDim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
        const graph = document.getElementById(id);

        const visualization = new ParallelCoordinates(Entry.group);
        visualization.Dimension(pcpDim)
            .AllDimensions(dims)
            .Graph(graph)
            .Variables(variables);

        visualization.render();

        return visualization;


    }
}
