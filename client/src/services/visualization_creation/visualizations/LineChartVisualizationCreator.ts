import { Task, Visualization } from '../../../helpers/enums';
import { VisualizationDrawer } from '../VisualizationDrawer';
import { CreationEntry } from 'src/helpers/types';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class LineChartVisualizationCreator extends VisualizationDrawer {
    public Draw(): boolean {
        const Entry = this.Entries;
        const id = '#' + Entry.id.Value;
        const graph = dc.lineChart(id);
        // If we have one variable only we draw line chart by Count
        if ((Entry.Questions).length === 1) {
            const dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
            const group = dim.group().reduceCount();
            const max = dim.top(Infinity).length;

            group.all().forEach((item, index) => {
                item["value"] = (item["value"] * 100 / max).toFixed(2);
              });
            const width = 1000;
            const height = 90;
            const margins = Entry.margins;
            graph
                .width(width)
                .height(height)
                .x(d3.scaleLinear().domain([1995, 2021]))
                .y(d3.scaleLinear().domain([0, 100]))
                .brushOn(false)
                .renderDataPoints(true)
                .clipPadding(10)
                .dimension(dim)
                .group(group)
                .renderHorizontalGridLines(true);
            graph.yAxis().tickValues([50]);
            graph.xAxis().tickFormat(d => String(d));

            graph.render();
            return true;
        } else {
            console.log(' Draw time line')
        }

    }
}
