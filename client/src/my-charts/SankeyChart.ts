import { NotficationService } from 'src/services/notification-service';

declare var Plotly: any;

export class Sankey {
    static _Data = null;
    static _variables = null;
    static _graph = null;
    static _dimension = null;
    static _dimensions = null;
    static _GroupId = null;

    static filters = {};

    static notificationService_;
    static getColor(array, filters) {
        let value = null;
        const colorscale = {
            0: 'lightsteelblue',
            1: 'mediumseagreen'
        };

        let new_color = array.map(item => {
            let filter = null;
            Object.keys(filters).map(key => {
                let subFilter = null;
                filters[key].map(value => {
                    if (subFilter === null) {
                        subFilter = (item[key] === value);
                    } else {
                        subFilter = subFilter || (item[key] === value);
                    }
                });
                if (filter === null) {
                    filter = subFilter;
                } else {
                    filter = filter && subFilter;
                }
            });

            if (filter) { value = 1; } else { value = 0; }
            return colorscale[value];
        });

        Plotly.restyle(Sankey._graph, { 'line.color': [new_color] });
        return this;
    }
    constructor(
        private notficationService: NotficationService,
        id: any = null) {
        Sankey._GroupId = id;
        Sankey.notificationService_ = this.notficationService;
    }

    Dimension(dim) {
        Sankey._dimension = dim;
        Sankey._Data = Object.assign([], dim.top(Infinity));
        return this;
    }

    AllDimensions(dims) {
        Sankey._dimensions = dims;
        return this;
    }

    Graph(graph) {
        Sankey._graph = graph;
        return this;
    }
    Variables(variable) {
        Sankey._variables = variable;
        return this;
    }


    render() {

        console.log('Taille Donnees:', Sankey._Data.length);
        const dimensions = this.getCategories(Sankey._Data);
        const color = new Int8Array(Sankey._Data.length);
        const colorscale = [[0, 'gray'], [1, '#1f77b4']];

        const traces = [
            {
                type: 'parcats',
                dimensions: dimensions,
                line: {
                    colorscale: colorscale,
                    cmin: 0,
                    cmax: 1,
                    color: color,
                    shape: 'hspline'
                },
                labelfont: { size: 10 },
                hoverinfo: 'count+probability'
            }
        ];

        const layout = {
            width: 500,
            height: 400,
            margin: {
                l: 50,
                r: 50,
                b: 100,
                t: 100,
                pad: 4
            }
        };

        Plotly.react(Sankey._graph, traces, layout, { displayModeBar: false });
        Sankey._graph.on('plotly_click', this.update_dimensions);
        return this;
    }

    redraw() {
        console.log('Redraw Sankey!');
        Sankey.getColor(Sankey._Data, Sankey.filters);
        return null;
    }
    getCategories(arr) {
        const dimensions = [];
        const variable = Sankey._variables;
        variable.forEach(element => {
            const objecty = {
                label: element,
                values: arr.map(el => el[element])
            };
            dimensions.push(objecty);
        });
        // console.log('Dimensions: ', dimensions);
        return dimensions;
    }
    public update_dimensions(e) {

        const filter = Object.entries(e.constraints)[0];
        const index = +filter[0];
        const value = filter[1];
        const MyIndex = Sankey._variables[index];
        let myDim = Sankey._dimensions.find(item => item.label === MyIndex).dimension;

        if (Object.keys(Sankey.filters).includes(MyIndex)) {
            console.log('Key filtered! ');
            if (Sankey.filters[MyIndex].includes(value)) {
                console.log('Value is included in filter! ');
                Sankey.filters[MyIndex].pop(value);
                if (Sankey.filters[MyIndex].length === 0) {
                    myDim.filterAll();
                } else {
                    myDim.filter(d => Sankey.filters[MyIndex].indexOf(d) > -1);
                }
            } else {
                Sankey.filters[MyIndex].push(value);
                myDim.filter(d => Sankey.filters[MyIndex].indexOf(d) > -1);
            }
        } else {
            console.log('I am filtering dimension: ', myDim.group().all(), 'with value ', value);
            Sankey.filters[MyIndex] = [value];
            myDim.filter(value);
        }

        //console.log('Group After:', Sankey._dimension.group(d => d === MyIndex).all())

        Sankey.notificationService_.emit(Sankey._GroupId);
        Sankey.getColor(Sankey._Data, Sankey.filters);
        console.log('Filters: ', Sankey.filters);
        return this;
    }



}
