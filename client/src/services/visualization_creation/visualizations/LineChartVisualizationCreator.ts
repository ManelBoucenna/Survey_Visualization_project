import { Task, Visualization } from '../../../helpers/enums';
import { VisualizationDrawer } from '../VisualizationDrawer';
import { CreationEntry } from 'src/helpers/types';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class LineChartVisualizationCreator extends VisualizationDrawer {
    public Draw(): boolean {
        const Entry = this.Entries;
        const id = '#' + Entry.id;
        const graph = dc.lineChart(id);
        // If we have one variable only we draw line chart by Count
        if ((Entry.Questions).length === 1) {
            const dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
            const group = dim.group().reduceCount();
            const width = 1000;
            const height = 90;
            const margins = Entry.margins;
            const max = 1000;
            graph
                .width(width)
                .height(height)
                .x(d3.scaleLinear().domain([1995, 2021]))
                .brushOn(false)
                .renderDataPoints(true)
                .clipPadding(10)
                .dimension(dim)
                .group(group);
            // .elasticY(true);
            graph.yAxis().tickFormat(d => (d * 100) / max + '%').ticks(3);
            graph.xAxis().tickFormat(d => String(d));

            graph.render();
            return true;
        } else {
            console.log(' Draw time line')
        }

    }
}
