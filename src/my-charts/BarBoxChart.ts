// import { NotficationService } from 'src/services/notification-service';

// declare var Plotly: any;

// export class BarBoxChart {
//     static _Data = null;
//     static _variable = null;
//     static _graph = null;
//     static _dimension = null;
//     static _group = null;
//     static _fixedGroup = null;
//     static BarBoxChart = null;
//     static dimensions_ = null;
//     static _GroupId = null;
//     static filters = [];

//     static notificationService_;

//     constructor(
//         private notficationService: NotficationService,
//         id: any = null
//     ) {
//         BarBoxChart.notificationService_ = this.notficationService;
//         BarBoxChart._GroupId = id;
//     }

//     Dimension(dim) {
//         BarBoxChart._dimension = dim;
//         BarBoxChart._dimension.filterAll();
//         BarBoxChart.filters = [];
//         return this;
//     }

//     Group(group) {
//         BarBoxChart._group = group.all();
//         return this;
//     }

//     Variable(variable) {
//         BarBoxChart._variable = variable;
//         return this;
//     }

//     Graph(graph) {
//         BarBoxChart._graph = graph;
//         return this;
//     }

//     render() {
//         const BarX = unpack(BarBoxChart._group, 'key');
//         const BarY = unpack(BarBoxChart._group, 'value');
//         const boxData = unpack(BarBoxChart._dimension.filter(d => (d > 0)).top(Infinity), BarBoxChart._variable);
//         const ranges = getRanges(BarX);

//         const trace1 = {
//             x: [categories(BarX), BarX],
//             y: BarY,
//             type: 'bar',
//             xaxis: 'x1',
//             marker: { color: colors(BarX) },
//             hoverinfo: 'x+y'
//         };

//         const trace2 = {
//             x: boxData,
//             type: 'box',
//             xaxis: 'x2',
//             yaxis: 'y2',
//             marker: {
//                 size: 1,
//                 color: '#1f77b4',

//             },
//             name:''
//         };

//         const data = [trace1, trace2];

//         const layout = {
//             showlegend: false,
//             //width: BarBoxChart._group.length *100,
//             height: 250,
//             margin: {
//                 l: 35,
//                 r: 10,
//                 b: 20,
//                 t: 10,
//                 pad: 0
//             },
//             grid: {
//                 rows: 2,
//                 columns: 1,
//                 pattern: 'independent'
//             },
//             //xaxis1: { range: ranges },
//             xaxis2: { range: ranges },
//             hovermode: 'closest',
//         };

//         Plotly.react(BarBoxChart._graph, data, layout, { displayModeBar: false });
//         BarBoxChart._graph.on('plotly_click', e => console.log(e));

//         function colors(array) {
//             const color = [];
//             array.forEach(element => {
//                 if (element > 0) { color.push('#1f77b4'); } else { color.push('rgb(227,26,28)'); }
//             });
//             return color;
//         }
//         function categories(array) {
//             const category = [];
//             array.forEach(element => {
//                 if (element > 0) { category.push('Ratings'); } else { category.push('Other'); }
//             });
//             return category;
//         }
//         function unpack(rows, key) {
//             return rows.map(row => row[key]);
//         }

//         function getRanges(array) {
//             const min = Math.min(...array);
//             const max = Math.max(...array);
//             return [min, max];
//         }
//         return this;
//     }

//     public updatedimensions_(e) {
//         const currentFilter = [e.key[0], e.key[1]];
//         const tempArray = [];
//         let existed = false;
//         BarBoxChart.filters.forEach(elem => {
//             if (elem[0] === currentFilter[0] && elem[1] === currentFilter[1]) {
//                 existed = true;
//             } else {
//                 tempArray.push(elem);
//             }
//         });
//         BarBoxChart.filters = tempArray;
//         if (existed === false) {
//             BarBoxChart.filters.push(currentFilter);
//         }
//         if (BarBoxChart.filters.length === 0) {
//             BarBoxChart._dimension.filterAll();
//         } else {
//             BarBoxChart._dimension.filterFunction(d => {
//                 let filter = null;
//                 BarBoxChart.filters.forEach(elem => {
//                     if (filter == null) {
//                         filter = (d[1] === elem[1] && d[0] === elem[0]);
//                     } else {
//                         filter = filter || (d[1] === elem[1] && d[0] === elem[0]);
//                     }
//                 });
//                 return filter;
//             });
//         }
//         BarBoxChart.notificationService_.emit(BarBoxChart._GroupId);
//         return this;
//     }

//     redraw() {
//         console.log('Redraw Bar Box');
//         this.render();
//         return null;
//     }
// }


import { NotficationService } from 'src/services/notification-service';


import * as d3 from 'd3';
import * as dc from 'dc';


export class BarBoxChart {
    static _Data = null;
    static _id = null;
    static _variable = null;
    static _graph = null;
    static _dimension_Bar = null;
    static _dimension_Box = null;
    static _group = null;
    static _fixedGroup = null;
    static BarChart = null;
    static BoxChart = null;
    static dimensions_ = null;
    static _GroupId = null;
    static filters = [];


    static notificationService_;


    constructor(
        private notficationService: NotficationService,
        id: any = null
    ) {
        BarBoxChart.notificationService_ = this.notficationService;
        BarBoxChart._GroupId = id;
    }


    Dimension(dimBar, dimBox) {
        BarBoxChart._dimension_Bar = dimBar;
        BarBoxChart._dimension_Bar.filterAll();
        BarBoxChart._dimension_Box = dimBox;
        BarBoxChart._dimension_Box.filterAll();
        BarBoxChart.filters = [];
        return this;
    }


    Group(group) {
        BarBoxChart._group = group.all();
        return this;
    }


    Variable(variable) {
        BarBoxChart._variable = variable;
        return this;
    }


    Graph(graph) {
        BarBoxChart._graph = graph;
        return this;
    }


    Id(id) {
        BarBoxChart._id = id;
        return this;
    }


    render() {
        const barChartcontainer = document.createElement('div');
        barChartcontainer.setAttribute('id', 'barChart');


        const boxChartcontainer = document.createElement('div');
        boxChartcontainer.setAttribute('id', 'boxChart');
        boxChartcontainer.style.height = '60px';
        boxChartcontainer.style.overflow = 'hidden';

        BarBoxChart._graph.appendChild(barChartcontainer);
        BarBoxChart._graph.appendChild(boxChartcontainer);



        const groupBarChart = BarBoxChart._dimension_Bar.group();
        const staticGroup = this.StaticCopyGroup(groupBarChart);
        const groupBoxPlot = BarBoxChart._dimension_Box.group().reduce(
            (p, v) => {
                const dv = v[BarBoxChart._variable];
                if (dv !== Infinity && dv != null && dv > 0) { p.splice(d3.bisectLeft(p, dv), 0, dv); }
                return p;
            },
            (p, v) => {
                // Retrieve the data value, if not Infinity or null remove it.
                const dv = v[BarBoxChart._variable];
                if (dv !== Infinity && dv != null && dv > 0) {
                    p.splice(p.indexOf(dv), 1);
                }
                return p;
            },
            () => []
        );


        const numGROUPS = groupBarChart.all().length;
        const positiveGROUPS = Object.keys(numGROUPS).filter(d => parseInt(d) > 0).length
        const width = numGROUPS * 21;
        const margin = { left: 35, right: 5, top: 2, bottom: 20 };
        const size = [width, 150, margin];


        BarBoxChart.BarChart = dc.compositeChart('#' + BarBoxChart._id + ' #barChart')


        BarBoxChart.BoxChart = dc.boxPlot('#' + BarBoxChart._id + ' #boxChart')


        BarBoxChart.BarChart.compose([
            dc.barChart(BarBoxChart.BarChart)
                .dimension(BarBoxChart._dimension_Bar)
                .group(staticGroup)
                .colors('#ccc')
                .controlsUseVisibility(true)
                .barPadding(1)
                .centerBar(false),
            dc.barChart(BarBoxChart.BarChart)
                .dimension(BarBoxChart._dimension_Bar)
                .group(groupBarChart)
                .colors(d3.scaleOrdinal().domain(['positive', 'negative'])
                    .range(['#1f77b4', '#8B0000']))
                .colorAccessor(function (d) {
                    if (d.key > 0) {
                        return 'positive';
                    }
                    return 'negative';
                })
                .controlsUseVisibility(true)
                .brushOn(false)
                .barPadding(0.5)
                .centerBar(false),
        ]);


        BarBoxChart.BarChart.width(size[0]).height(size[1]).margins(size[2])
            .dimension(BarBoxChart._dimension_Bar)
            .group(groupBarChart)
            .x(d3.scaleBand())
            .xUnits(dc.units.ordinal)
            .brushOn(true);


        BarBoxChart.BarChart.renderHorizontalGridLines(true);
        BarBoxChart.BarChart.yAxis().ticks(4);


        BarBoxChart.BoxChart.width(positiveGROUPS * 9)
            .height(positiveGROUPS * 20)
            .margins({ left: 150, right: 50, top: 15, bottom: 3 })
            .dimension(BarBoxChart._dimension_Box)
            .group(groupBoxPlot)
            .renderTitle(true)
            .renderDataPoints(false)
            .elasticY(false)
            .dataWidthPortion(0.7)
            .elasticX(false);
        // BoxChart.yAxis().ticks(2);
        BarBoxChart.BoxChart.renderHorizontalGridLines(true);


        BarBoxChart.BoxChart.on('renderlet', (chart) => {
            BarBoxChart.BoxChart.select('svg').attr('transform', 'rotate(90) translate(-120,-' + ((numGROUPS - positiveGROUPS) * 5) + ')');
            BarBoxChart.BoxChart.selectAll('g.axis.x')
                .attr('display', 'none')
            BarBoxChart.BoxChart.selectAll('g.axis.y path.domain')
                .attr('display', 'none')
            BarBoxChart.BoxChart.selectAll('rect.box')
                .append('title')
                .text((d) => {
                    let mean = d3.mean(d.value).toFixed(2);
                    let median = d3.median(d.value).toFixed(2);
                    let min = d3.min(d.value);
                    let max = d3.max(d.value);
                    return 'Mean: ' + mean + '\n'
                        + 'Median: ' + median + '\n'
                        + 'Min: ' + min + '\n'
                        + 'Max: ' + max + '\n'
                });
            BarBoxChart.BoxChart.select('text')
                .attr('color', 'white')
        });


        BarBoxChart.BoxChart.render();
        BarBoxChart.BarChart.render();


        // let boxy = document.getElementById('#' + BarBoxChart._id + ' #boxChart')
        // boxy.setAttribute('height', '80px');
        // boxy.setAttribute('overflow', 'hidden');

    }


    StaticCopyGroup(group) {
        const all = group.all().map(function (kv) { return { key: kv.key, value: kv.value }; });
        return {
            all() {
                return all;
            }
        };
    }


    redraw() {
        BarBoxChart.BarChart.redraw();
        BarBoxChart.BoxChart.redraw();
    }
}

