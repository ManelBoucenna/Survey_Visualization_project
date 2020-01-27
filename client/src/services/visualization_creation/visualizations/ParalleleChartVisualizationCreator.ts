import { Task, Visualization } from '../../../helpers/enums';
import { VisualizationDrawer } from '../VisualizationDrawer';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class ParalleleChartVisualizationCreator extends VisualizationDrawer {
    public Draw(): boolean {
        console.log('Parallel chart');
        return true;
    }
}
