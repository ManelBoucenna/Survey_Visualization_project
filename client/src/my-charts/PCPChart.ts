import { NotficationService } from 'src/services/notification-service';

declare var Plotly: any;
import * as d3 from 'd3';

export class ParallelCoordinates {
    static _Data = null;
    static _variables = null;
    static _graph = null;
    static _dimension = null;
    static _dimensions = null;
    static _GroupId = null;

    static filters = {};

    static notificationService_;
    constructor(
        private notficationService: NotficationService,
        id: any = null
    ) {
        ParallelCoordinates.notificationService_ = this.notficationService;
        ParallelCoordinates._GroupId = id;
    }

    Dimension(dim) {
        ParallelCoordinates._dimension = dim;
        ParallelCoordinates._Data = dim.top(Infinity);
        return this;
    }

    AllDimensions(dims) {
        ParallelCoordinates._dimensions = dims;
        return this;
    }

    Graph(graph) {
        ParallelCoordinates._graph = graph;
        return this;
    }
    Variables(variable) {
        ParallelCoordinates._variables = variable;
        return this;
    }

    render() {
        var data = [{
            type: 'parcoords',
            line: {
                showscale: true,
                reversescale: true,
                colorscale: 'Greys',
            },

            dimensions: this.getCategories(ParallelCoordinates._Data)
        },
        {
            type: 'parcoords',
            line: {
                showscale: true,
                reversescale: true,
                colorscale: 'Jet',
            },

            dimensions: this.getCategories(ParallelCoordinates._Data)
        }
        ];

        var layout = { width: 400 };
        Plotly.react(ParallelCoordinates._graph, data, layout, { displayModeBar: false });

        ParallelCoordinates._graph.on('plotly_restyle', this.update_dimensions);
        return this;
    }

    redraw() {
        ParallelCoordinates._Data = ParallelCoordinates._dimension.top(Infinity);
        // Plotly.restyle(ParallelCoordinates._graph, { 'dimensions': this.getCategories(ParallelCoordinates._Data) }, 1);
        // ParallelCoordinates._graph.on('plotly_restyle', this.update_dimensions);

        return this;
    }
    getCategories(arr) {
        const dimensions = [];
        var variable = ParallelCoordinates._variables;
        variable.forEach(element => {
            const object = {
                label: element,
                values: arr.map(el => el[element])
            };
            dimensions.push(object);
        });
        return dimensions;
    }

    public update_dimensions(e) {
        /* Handle the output of filtering inside a group in card
        e = [{
        "dimensions": [
          {
            "label": "IMD1008_YEAR",
            "values": [
              2001,
              2001,
              ...
            ]
            },
            {
              "label": "IMD1008_YEAR",
              "values": [..]
        }]},
        [0]
        ] */
        if (Object.keys(e[0])[0] === "dimensions") {
            e[0]['dimensions'].forEach((element, index) => {
                var temp = element['values']
                const ranges = [Math.min(...temp), Math.max(...temp)];
                console.log("Range :", ranges);
                ParallelCoordinates.filters[index] = ranges;
                ParallelCoordinates._dimensions[index].filterRange(ranges);
            });
            ParallelCoordinates.notificationService_.emit(ParallelCoordinates._GroupId);
            return this;
        } else {
            let filter = e[0];
            const index = +Object.keys(filter)[0][11]; // Suppose <10 variables
            if (Object.values(filter)[0] !== null) { // If ranges exists
                const ranges = Object.values(filter)[0][0];
                ParallelCoordinates.filters[index] = ranges;
                ParallelCoordinates._dimensions[index].filterRange(ranges);
            } else {
                ParallelCoordinates.filters[index] = null;
                ParallelCoordinates._dimensions[index].filterAll();
            }
            ParallelCoordinates.notificationService_.emit(ParallelCoordinates._GroupId);
            return this;
        }

    }

}