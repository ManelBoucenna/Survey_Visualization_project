import { VisualizationDrawer } from '../VisualizationDrawer';


// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
import * as crossfilter from 'crossfilter';

export class BoxChartVisualizationCreator extends VisualizationDrawer {

    public Draw(): boolean {

        const Entry = this.Entries;
        const id = '#' + Entry.id;
        const graph = dc.boxPlot(id);
        const dim = Entry.ndx.dimension(d => "");
        const group = dim.group().reduce(
            (p, v) => {
                return (p.push(v[Entry.Questions[0].variable]), p);
            },
            (p, v) => {
                // Retrieve the data value, if not Infinity or null remove it.
                let dv = v[Entry.Questions[0].variable];
                if (dv != Infinity && dv != null) {
                    p.splice(p.indexOf(dv), 1);
                }
                return p;
            },
            () => []
        );

        const width = 45;
        const height = 75;
        const margins = { left: 15, right: 0, top: 0, bottom: 5 };

        graph
            .width(width)
            .height(height)
            .margins(margins)
            .dimension(dim)
            .group(group);
        // .elasticY(true)
        // .elasticX(true);
        graph.yAxis().ticks(5);
        graph.on('renderlet', (chart) => {
            chart.select('svg').attr('transform', 'rotate(90)');
            // chart.selectAll('text').style('text-anchor', 'end')
            // .attr('transform','rotate(-90)')
        });

        graph.render();
        return true;
    }
}
