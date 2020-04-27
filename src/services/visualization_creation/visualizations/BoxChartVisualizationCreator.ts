import { VisualizationDrawer } from '../VisualizationDrawer';


// Visualization libraries
import * as d3 from 'd3';
import * as dc from 'dc';
import * as crossfilter from 'crossfilter';

export class BoxChartVisualizationCreator extends VisualizationDrawer {

    public Draw(): any {

        const Entry = this.Entries;
        const id = '#' + Entry.id.Value;
        const graph = dc.boxPlot(id);
        // const graphDeselected = dc.boxPlot(id);
        const variable = Entry.Questions[0].variable;
        const dim = Entry.ndx.dimension(d => '');
        const dimReset = Entry.ndx.dimension(d => '');
        const group = dim.group().reduce(
            (p, v) => {
                const dv = v[variable];
                if (dv !== Infinity && dv != null && dv > 0) { p.splice(d3.bisectLeft(p, dv), 0, dv); }
                return p;
            },
            (p, v) => {
                // Retrieve the data value, if not Infinity or null remove it.
                const dv = v[variable];
                if (dv !== Infinity && dv != null && dv > 0) {
                    p.splice(p.indexOf(dv), 1);
                }
                return p;
            },
            () => []
        );

        const width = 55;
        const height = 0.75*document.getElementById(Entry.id.Value).getBoundingClientRect().width;

        const margins = { left: 20, right: 0, top: 5, bottom: 3 };

        graph
            .width(width)
            .height(height)
            .margins(margins)
            .dimension(dim)
            .group(group)
            .showOutliers(false);

        graph.yAxis().ticks(2);

        graph.renderHorizontalGridLines(true);

 
        graph.on('renderlet', (chart) => {
            graph.select('svg').attr('transform', 'rotate(90) translate(0,-15)');
            graph.selectAll('text')
                .attr('text-anchor', 'middle')
                .attr('transform', () => 'translate(-15,-12) rotate(-90)');
            graph.selectAll('g.axis.x')
                .attr('display', 'none')
            graph.selectAll('g.axis.y path.domain')
                .attr('display', 'none')
            graph.selectAll('rect.box')
            .append('title')
            .text((d) => {
                return 'Mean: ' + d3.mean(d.value).toFixed(2) + '\n'
                    + 'Median: ' + d3.median(d.value).toFixed(2) + '\n'
                    + 'Min: ' + d3.min(d.value) + '\n'
                    + 'Max: ' + d3.max(d.value) + '\n'
                    // + 'Variance: ' + d3.variance(d.value).toFixed(2) + '\n';
            });
        });
        graph.render();
        return {
            'graph':graph,
            'dim': dimReset
        }
    }
}
