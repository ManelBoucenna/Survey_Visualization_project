import { NotficationService } from 'src/services/notification-service';

declare var Plotly: any;

export class Sankey {
    static Data = null;
    static Variables = null;
    static Graph = null;
    static Dimension = null;
    static Dimensions = null;
    static GroupId = null;
    static NotificationService;

    static filters = {};

    static getColor(array, filters) {
        let value = null;
        const colorscale = {
            0: '#ccc',
            1: '#1f77b4'
        };

        const newColor = array.map(item => {
            let filter = null;
            Object.keys(filters).map(key => {
                let subFilter = null;
                if (filters[key].length > 0) {
                    filters[key].map(value => {
                        if (subFilter === null) {
                            subFilter = (item[key] === value);
                        } else {
                            subFilter = subFilter || (item[key] === value);
                        }
                    });
                } else {
                    subFilter = true;
                }
                if (filter === null) {
                    filter = subFilter;
                } else {
                    filter = filter && subFilter;
                }
            });

            if (filter) { value = 1; } else { value = 0; }
            return colorscale[value];
        });

        Plotly.restyle(Sankey.Graph, { 'line.color': [newColor] });
        return this;
    }
    constructor(
        private notficationService: NotficationService,
        id: any = null) {
        Sankey.GroupId = id;
        Sankey.NotificationService = this.notficationService;
    }

    Dimension(dim) {
        Sankey.Dimension = dim;
        Sankey.Data = Object.assign([], dim.top(Infinity));
        return this;
    }

    AllDimensions(dims) {
        Sankey.Dimensions = dims;
        return this;
    }

    Graph(graph) {
        Sankey.Graph = graph;
        return this;
    }
    Variables(variable) {
        Sankey.Variables = variable;
        return this;
    }


    render() {

        Sankey.filters = {};
        const dimensions = this.getCategories(Sankey.Data);
        const color = new Int8Array(Sankey.Data.length);
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
            width: Sankey.Variables.length * 150,
            height: 300,
            margin: {
                l: 50,
                r: 50,
                b: 25,
                t: 25
            }
        };

        Plotly.react(Sankey.Graph, traces, layout, { displayModeBar: false });
        Sankey.Graph.on('plotly_click', this.update_dimensions);
        return this;
    }

    redraw() {
        //Sankey.getColor(Sankey.Data, Sankey.filters);
        //console.log(Sankey.Dimension.currentFilter())
        return null;
    }

    getCategories(arr) {
        const dimensions = [];
        const variable = Sankey.Variables;
        variable.forEach(element => {
            const objecty = {
                label: element,
                values: arr.map(el => el[element])
            };
            dimensions.push(objecty);
        });
        return dimensions;
    }
    public update_dimensions(e) {

        const filter = Object.entries(e.constraints)[0];
        const index = +filter[0];
        const value = filter[1];
        const MyIndex = Sankey.Variables[index];
        let myDim = Sankey.Dimensions.find(item => item.label === MyIndex).dimension;
        // console.log("Selected Dimensions:", myDim.group().reduceCount().all())
        // console.log(MyIndex)
        // console.log(Sankey.filters)
        if (Object.keys(Sankey.filters).includes(MyIndex)) {
            if (Sankey.filters[MyIndex].includes(value)) {
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
            Sankey.filters[MyIndex] = [value];
            myDim.filter(value);
        }

        console.log(myDim.group().reduceCount().all())
        Sankey.NotificationService.emit(Sankey.GroupId);
        Sankey.getColor(Sankey.Data, Sankey.filters);
        return this;
    }



}
