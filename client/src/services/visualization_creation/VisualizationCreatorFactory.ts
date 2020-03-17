import { VisualizationDrawer } from './VisualizationDrawer';
import { Visualization } from '../../helpers/enums';
import { CreationEntry } from 'src/helpers/types';
// Visualizations
import { BoxChartVisualizationCreator } from './visualizations/BoxChartVisualizationCreator';
import { BarChartVisualizationCreator } from './visualizations/BarChartVisualizationCreator';
import { DetailledBarChartVisualizationCreator } from './visualizations/DetailledBarChartVisualizationCreator';
import { BarBoxChartVisualizationCreator } from './visualizations/BarBoxChartVisualizationCreator';
import { BubbleChartVisualizationCreator } from './visualizations/BubbleChartVisualizationCreator';
import { LineChartVisualizationCreator } from './visualizations/LineChartVisualizationCreator';
import { ParalleleChartVisualizationCreator } from './visualizations/ParalleleChartVisualizationCreator';
import { BalloonChartVisualizationCreator } from './visualizations/BalloonChartVisualizationCreator';
import { ViolinChartVisualizationCreator } from './visualizations/ViolinChartVisualizationCreator';
import { ViolinBoxChartVisualizationCreator } from './visualizations/ViolinBoxChartVisualizationCreator';
import { StackedChartVisualizationCreator } from './visualizations/StackedChartVisualizationCreator';
import {SankeyChartVisualizationCreator} from './visualizations/SankeyChartVisualizationCreator';
import { NotficationService } from 'src/services/notification-service';


export class VisualizationDrawerFactory {

    public static Create(visualization: Visualization, creationEntry: CreationEntry, notficationService: NotficationService): VisualizationDrawer {
        switch (visualization) {
            case Visualization.BarChart: return new BarChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.DetailledBarChart: return new DetailledBarChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.BarBoxChart: return new BarBoxChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.BoxChart: return new BoxChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.BubbleChart: return new BubbleChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.LineChart: return new LineChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.ParallelChart: return new ParalleleChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.BalloonChart: return new BalloonChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.ViolinChart: return new ViolinChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.ViolinBoxChart: return new ViolinBoxChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.StackedChart: return new StackedChartVisualizationCreator(creationEntry, notficationService);
            case Visualization.SankeyChart: return new SankeyChartVisualizationCreator(creationEntry, notficationService);
            default: return null;
        }
    }
}
