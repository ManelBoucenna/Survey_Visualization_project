import { NotficationService } from 'src/services/notification-service';

declare var Plotly: any;

export class BarBoxChart {
    static _Data = null;
    static _variable = null;
    static _graph = null;
    static _dimension = null;
    static _group = null;
    static _fixedGroup = null;
    static BarBoxChart = null;
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

    Dimension(dim) {
        BarBoxChart._dimension = dim;
        BarBoxChart._dimension.filterAll();
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

    render() {
        const BarX = unpack(BarBoxChart._group, 'key');
        const BarY = unpack(BarBoxChart._group, 'value');
        const boxData = unpack(BarBoxChart._dimension.filter(d => (d > 0)).top(Infinity), BarBoxChart._variable);
        const ranges = getRanges(BarX);

        const trace1 = {
            x: [categories(BarX), BarX],
            y: BarY,
            type: 'bar',
            xaxis: 'x1',
            marker: { color: colors(BarX) },
            hoverinfo: 'x+y'
        };

        const trace2 = {
            x: boxData,
            type: 'box',
            xaxis: 'x2',
            yaxis: 'y2',
            marker: {
                size: 1,
                color: '#1f77b4',

            },
            name:''
        };

        const data = [trace1, trace2];

        const layout = {
            showlegend: false,
            //width: 300,
            height: 250,
            margin: {
                l: 35,
                r: 10,
                b: 20,
                t: 10,
                pad: 0
            },
            grid: {
                rows: 2,
                columns: 1,
                pattern: 'independent'
            },
            //xaxis1: { range: ranges },
            xaxis2: { range: ranges },
            hovermode: 'closest',
        };

        Plotly.react(BarBoxChart._graph, data, layout, { displayModeBar: false });
        BarBoxChart._graph.on('plotly_click', e => console.log(e));

        function colors(array) {
            const color = [];
            array.forEach(element => {
                if (element > 0) { color.push('#1f77b4'); } else { color.push('rgb(227,26,28)'); }
            });
            return color;
        }
        function categories(array) {
            const category = [];
            array.forEach(element => {
                if (element > 0) { category.push('Ratings'); } else { category.push('Other'); }
            });
            return category;
        }
        function unpack(rows, key) {
            return rows.map(row => row[key]);
        }

        function getRanges(array) {
            const min = Math.min(...array);
            const max = Math.max(...array);
            return [min, max];
        }
        return this;
    }

    public updatedimensions_(e) {
        const currentFilter = [e.key[0], e.key[1]];
        const tempArray = [];
        let existed = false;
        BarBoxChart.filters.forEach(elem => {
            if (elem[0] === currentFilter[0] && elem[1] === currentFilter[1]) {
                existed = true;
            } else {
                tempArray.push(elem);
            }
        });
        BarBoxChart.filters = tempArray;
        if (existed === false) {
            BarBoxChart.filters.push(currentFilter);
        }
        if (BarBoxChart.filters.length === 0) {
            BarBoxChart._dimension.filterAll();
        } else {
            BarBoxChart._dimension.filterFunction(d => {
                let filter = null;
                BarBoxChart.filters.forEach(elem => {
                    if (filter == null) {
                        filter = (d[1] === elem[1] && d[0] === elem[0]);
                    } else {
                        filter = filter || (d[1] === elem[1] && d[0] === elem[0]);
                    }
                });
                return filter;
            });
        }
        BarBoxChart.notificationService_.emit(BarBoxChart._GroupId);
        return this;
    }

    redraw() {
        console.log('Redraw Bar Box');
        this.render();
        return null;
    }
}
