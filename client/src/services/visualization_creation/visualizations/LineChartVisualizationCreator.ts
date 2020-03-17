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
        // const graph1 = new dc.CompositeChart(id);
        
        // If we have one variable only we draw line chart by Count
        if ((Entry.Questions).length === 1) {
            const dim = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);
            const dimFilter = Entry.ndx.dimension(d => d[Entry.Questions[0].variable]);

            const group = dim.group().reduceCount();
            const staticGroup = super.StaticCopyGroup(group);
            const width = 1000;
            const height = 90;
            const margins = { left: 40, right: 50, top: 10, bottom: 30 };

            // graph1.compose([
            //     new dc.LineChart(graph1)
            //         .width(width)
            //         .height(height)
            //         .margins(margins)
            //         .x(d3.scaleLinear().domain([1995, 2021]))
            //         .y(d3.scaleLinear().domain([0, group.top(1)[0].value + 100]))
            //         .brushOn(false)
            //         .renderDataPoints(true)
            //         .clipPadding(10)
            //         .dimension(dim)
            //         .group(group)
            //         // .colors('#ccc')
            //         .renderHorizontalGridLines(true),
            //     // new dc.LineChart(graph1)
            //     //     .width(width)
            //     //     .height(height)
            //     //     .margins(margins)
            //     //     .x(d3.scaleLinear().domain([1995, 2021]))
            //     //     .y(d3.scaleLinear().domain([0, group.top(1)[0].value + 100]))
            //     //     .brushOn(false)
            //     //     .renderDataPoints(true)
            //     //     .clipPadding(10)
            //     //     .dimension(dim)
            //     //     .group(group)
            //     //     .renderHorizontalGridLines(true)
            //     //     .on('renderlet', function (chart) {
            //     //         graph1.selectAll('circle').on('click', function (d) {
            //     //             console.log('click!', d);
            //     //             if (filter.includes(d.x)) {
            //     //                 filter = filter.filter((value) => value !== d.x);
            //     //             } else {
            //     //                 filter.push(d.x);
            //     //             }
            //     //             console.log(filter);
            //     //             dimFilter.filter(z => z === d.x);
            //     //             // dimFilter.filterFunction(d => {
            //     //             //     let temp = null;
            //     //             //     filter.forEach(elem => {
            //     //             //         if (filter == null) {
            //     //             //             temp = d === elem;
            //     //             //         } else {
            //     //             //             temp = filter || (d === elem);
            //     //             //         }
            //     //             //     });
            //     //             //     return temp;
            //     //             // });
            //     //             dc.redrawAll();
            //     //         });
            //     //     })
            // ]).render();
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
                });
            graph.yAxis().ticks(3).tickFormat(d => String(d));
            graph.xAxis().tickFormat(d => String(d));

            graph.render();
            return graph;

        } else {
            console.log(' Draw time line');
        }

    }
}
