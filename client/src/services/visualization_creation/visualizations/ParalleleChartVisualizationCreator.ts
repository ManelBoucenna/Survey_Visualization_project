import { Task, Visualization } from '../../../helpers/enums';
import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
declare var Plotly: any;

export class ParalleleChartVisualizationCreator extends VisualizationDrawer {
    public Draw(): boolean {
        console.log('Parallel chart');
        const Entry = this.Entries;
        const id = Entry.id.Value;

        const dims = [];
        const groups = [];
        const variables = [];

        Entry.Questions.forEach(element => {
            const dim = Entry.ndx.dimension(d => d[element.variable]);
            const group = dim.group().reduceCount();
            dims.push(dim);
            groups.push(group);
            variables.push(element.variable);
        });

        const pcpDim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
        const graph = document.getElementById(id);
        var allDim = pcpDim.top(Infinity);

        function getCategories(arr) {
            const dimensions = [];
            variables.forEach(element => {
                const object = {
                    label: element,
                    values: arr.map(el => el[element])
                };
                dimensions.push(object);
            });
            console.log(dimensions);
            return dimensions;
        }

        var data = [{
            type: 'parcoords',
            line: {
                showscale: true,
                reversescale: true,
                colorscale: 'Jet',
            },

            dimensions: getCategories(allDim)
        }];

        var layout =  { width: 400};

        Plotly.newPlot(id, data, layout);


        return true;
    }
}
