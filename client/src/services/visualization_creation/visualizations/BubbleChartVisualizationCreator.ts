import { Task, Visualization } from '../../../helpers/enums';
import { VisualizationDrawer } from '../VisualizationDrawer';
import { CreationEntry } from 'src/helpers/types';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class BubbleChartVisualizationCreator extends VisualizationDrawer {
    public Draw(): boolean {
        console.log(this.Entries)
        const xEntry = this.Entries.Questions[0];
        const yEntry = this.Entries.Questions[1];
        const id = '#' + this.Entries.id;

        const graph = dc.bubbleChart(id);
        const dim = this.Entries.ndx.dimension(d => {
            return [
                d[xEntry.variable],
                d[yEntry.variable]
            ];
        }

        );
        const group = dim.group().reduceCount();

        const width = 200;
        const height = 200;
        const margins = this.Entries.margins;

        graph
            .width(width).height(height)
            // .margins(margins)
            .dimension(dim)
            .group(group)
            .minRadius(10)
            .maxBubbleRelativeSize(0.3)
            .colorAccessor(function (d) {
                return "#a60000";
            })
            .keyAccessor(p => {
                return p.key[0];
            })

            .valueAccessor(p => {
                return p.key[1];
            })
            .radiusValueAccessor(function (p) {
                return 4;
            })
            // .x(d3.scaleBand())
            .x(d3.scaleBand().domain([-1, 6]))
            .y(d3.scaleLinear().domain([-1, 5]))
            .xUnits(dc.units.ordinal)
            .elasticY(true)
            .elasticX(true)
            .renderHorizontalGridLines(true)
            .renderVerticalGridLines(true)
            .renderLabel(true)
            .renderTitle(true)
            .title(function (p) {
                return p.key[0]
                    + "\n"
                    + xEntry.variable + "" + p.key[0] + "\n"
                    + yEntry.variable + "" + p.key[1] + "\n"
                    + "Count: " + p.value;
            });

        // graph.xAxis().tickValues([]);
        // graph.yAxis().tickValues([]);

        graph.render();
        return true;
    }
}
