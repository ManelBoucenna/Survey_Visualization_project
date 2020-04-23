import { Task, Visualization } from '../../../helpers/enums';
import { VisualizationDrawer } from '../VisualizationDrawer';
import { CreationEntry } from 'src/helpers/types';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class BubbleChartVisualizationCreator extends VisualizationDrawer {
    public Draw(): any {
        console.log(this.Entries)
        const xEntry = this.Entries.Questions[0];
        const yEntry = this.Entries.Questions[1];
        const id = '#' + this.Entries.id.Value;

        const graph = dc.bubbleChart(id);
        const dim = this.Entries.ndx.dimension(d => {
            return [
                d[xEntry.variable],
                d[yEntry.variable]
            ];
        }

        );
        const group = dim.group().reduceCount();
        console.log(group.all())
        const dimX = this.Entries.ndx.dimension(d => {
            return d[xEntry.variable];
        });
        const dimY = this.Entries.ndx.dimension(d => {
            return d[yEntry.variable];
        });
        const rangex = [dimX.bottom(1)[0][xEntry.variable] - 10, dimX.top(1)[0][xEntry.variable] + 10];
        const rangey = [dimY.bottom(1)[0][yEntry.variable] - 10, dimY.top(1)[0][yEntry.variable] + 10];

        const width = 400;
        const height = 400;
        const margins = { left: 50, right: 50, top: 50, bottom: 50 };

        graph
            .width(width).height(height)
            .margins(margins)
            .dimension(dim)
            .group(group)
            .minRadius(10)
            .maxBubbleRelativeSize(0.3)
            .colorAccessor(function () {
                return '#a60000';
            })
            .keyAccessor(p => {
                return p.key[0];
            })

            .valueAccessor(p => {
                return p.key[1];
            })
            .radiusValueAccessor(function (p) {
                return p.value / 100;
            })
            // .x(d3.scaleBand())
            .x(d3.scaleLinear().domain(rangex))
            .y(d3.scaleLinear().domain(rangey))
            // .xUnits(dc.units.ordinal)
            .elasticY(false)
            .elasticX(false)
            .renderHorizontalGridLines(true)
            .renderVerticalGridLines(true)
            .renderLabel(false)
            .renderTitle(true)
            .title(function (p) {
                console.log('hOVER BUBBEL');
                return xEntry.question + ': ' + p.key[0] + '\n'
                    + yEntry.question + ': ' + p.key[1] + '\n'
                    + 'Count: ' + p.value;
            });

        graph.xAxis().ticks(5).tickFormat(d => String(d));
        graph.yAxis().ticks(5).tickFormat(d => String(d));


        graph.render();
        return true;
    }
}
