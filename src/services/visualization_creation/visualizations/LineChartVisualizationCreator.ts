import { Task, Visualization } from '../../../helpers/enums';
import { VisualizationDrawer } from '../VisualizationDrawer';
import { CreationEntry } from 'src/helpers/types';

// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';

export class LineChartVisualizationCreator extends VisualizationDrawer {
    public Draw(): any {
        const Entry = this.Entries;
        const id = '#' + Entry.id.Value;
        const graph = dc.lineChart(id);
        let filter = [];
        const width = document.getElementById(Entry.id.Value).getBoundingClientRect().width;
        const height = 95;

        // If we have one variable only we draw line chart by Count
        if ((Entry.Questions).length === 1) {
            const dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
            const dimFilter = Entry.ndx.dimension(d => '');

            const group = dim.group().reduceCount();
            const staticGroup = super.StaticCopyGroup(group);

            const margins = { left: 5, right: 5, top: 10, bottom: 30 };

            graph
                .width(width)
                .height(height)
                .margins(margins)
                .x(d3.scaleLinear().domain([1995, 2021]))
                .y(d3.scaleLinear().domain([0, group.top(1)[0].value + 100]))
                .brushOn(false)
                .renderDataPoints(true)
                .clipPadding(10)
                .dimension(dim)
                .group(group)
                .renderHorizontalGridLines(true)
                .on('renderlet', (chart) => {
                    graph.selectAll('circle').on('click', (d) => {
                        if (filter.includes(d.x)) {
                            filter = filter.filter((value) => value !== d.x);
                        } else {
                            filter.push(d.x);
                        }
                        if (filter.length > 0) {
                            dimFilter.filterFunction(A => {
                                let temp = null;
                                filter.forEach(elem => {
                                    if (temp == null) {
                                        temp = (A === elem);
                                    } else {
                                        temp = temp || (A === elem);
                                    }
                                });
                                return temp;
                            });
                        } else { dimFilter.filterAll(); }
                        dc.redrawAll();
                    });
                    graph.selectAll('g.axis.y')
                        .attr('display', 'none');
                });
            graph.yAxis().ticks(3).tickFormat(d => String(d));
            graph.xAxis().tickFormat(d => String(d));

            graph.render();
            return {
                'graph': graph,
                'dim': dimFilter
            }

        } else {
            console.log(' Draw time line');
        }

    }
}
