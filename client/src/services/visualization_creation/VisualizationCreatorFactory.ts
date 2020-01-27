import { VisualizationDrawer } from './VisualizationDrawer';
import { Visualization } from '../../helpers/enums';
import { CreationEntry } from 'src/helpers/types';
// Visualizations
import { BoxChartVisualizationCreator } from './visualizations/BoxChartVisualizationCreator';
import { BarChartVisualizationCreator } from './visualizations/BarChartVisualizationCreator';
import { BarBoxChartVisualizationCreator } from './visualizations/BarBoxChartVisualizationCreator';
import { BubbleChartVisualizationCreator } from './visualizations/BubbleChartVisualizationCreator';
import { LineChartVisualizationCreator } from './visualizations/LineChartVisualizationCreator';
import { ParalleleChartVisualizationCreator } from './visualizations/ParalleleChartVisualizationCreator';
import { BalloonChartVisualizationCreator } from './visualizations/BalloonChartVisualizationCreator';
import { ViolinChartVisualizationCreator } from './visualizations/ViolinChartVisualizationCreator';
import { ViolinBoxChartVisualizationCreator } from './visualizations/ViolinBoxChartVisualizationCreator';
import { StackedChartVisualizationCreator } from './visualizations/StackedChartVisualizationCreator';
import {SankeyChartVisualizationCreator} from './visualizations/SankeyChartVisualizationCreator';

export class VisualizationDrawerFactory {
    public static Create(visualization: Visualization, creationEntry: CreationEntry): VisualizationDrawer {
        switch (visualization) {
            case Visualization.BarChart: return new BarChartVisualizationCreator(creationEntry);
            case Visualization.BarBoxChart: return new BarBoxChartVisualizationCreator(creationEntry);
            case Visualization.BoxChart: return new BoxChartVisualizationCreator(creationEntry);
            case Visualization.BubbleChart: return new BubbleChartVisualizationCreator(creationEntry);
            case Visualization.LineChart: return new LineChartVisualizationCreator(creationEntry);
            case Visualization.ParallelChart: return new ParalleleChartVisualizationCreator(creationEntry);
            case Visualization.BalloonChart: return new BalloonChartVisualizationCreator(creationEntry);
            case Visualization.ViolinChart: return new ViolinChartVisualizationCreator(creationEntry);
            case Visualization.ViolinBoxChart: return new ViolinBoxChartVisualizationCreator(creationEntry);
            case Visualization.StackedChart: return new StackedChartVisualizationCreator(creationEntry);
            case Visualization.SankeyChart: return new SankeyChartVisualizationCreator(creationEntry);
            default: return null;
        }
    }
}
