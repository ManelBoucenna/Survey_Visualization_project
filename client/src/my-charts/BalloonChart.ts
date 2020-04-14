import { NotficationService } from 'src/services/notification-service';

import * as d3 from 'd3';

export class BalloonChart {
    static _Data = null;
    static _variables = null;
    static _graph = null;
    static _dimension = null;
    static _group = null;
    static _fixedGroup = null;


    static balloonChart = null;
    static _dimensions = null;
    static _GroupId = null;

    static filters = [];

    static notificationService_;

    static x;
    static y;
    static min;
    static max;
    constructor(
        private notficationService: NotficationService,
        id: any = null
    ) {
        BalloonChart.notificationService_ = this.notficationService;
        BalloonChart._GroupId = id;
    }

    Dimension(dim) {
        BalloonChart._dimension = dim;
        BalloonChart._dimension.filterAll();
        BalloonChart.filters = [];
        return this;
    }

    Group(group) {
        BalloonChart._group = group;
        return this;
    }

    FixedGroup(group) {
        BalloonChart._fixedGroup = group;
        return this;
    }

    Graph(graph) {
        BalloonChart._graph = graph;
        return this;
    }

    render() {
        BalloonChart.balloonChart = this.draw().selectAll('.bubble').on('click', this.update_dimensions);
        return this;
    }

    draw() {
        BalloonChart._graph.html('');
        let svg = BalloonChart._graph.append('svg')
            .attr('width', '400')
            .attr('height', '400')
            .attr('class', 'background-style');
        let margin = { top: 10, right: 10, bottom: 50, left: 50 };
        let width = +svg.attr('width') - margin.left - margin.right;
        let height = +svg.attr('height') - margin.top - margin.bottom;

        var x = d3.scaleBand().rangeRound([0, width]).padding(1)
        var y = d3.scaleBand().rangeRound([0, height]).padding(1)

        var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        x.domain(BalloonChart._fixedGroup.all().map(function (d) { return d.key[0] }))
        y.domain(BalloonChart._fixedGroup.all().map(function (d) { return d.key[1] }))


        let min = Number.MAX_VALUE;
        let max = -Number.MAX_VALUE;

        BalloonChart._fixedGroup.all().forEach(function (o) {
            min = Math.min(min, o.value);
            max = Math.max(max, o.value);
        });

        g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x))
            .append('text')
            .attr('transform', 'rotate(-45)')
            .attr('y', 6)
            .attr('dy', '2.5em')
            .attr('dx', width / 2 - margin.left);
        g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(y).ticks(10))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end');

        d3.selectAll('.axis--x text')
            .attr('transform', 'translate(-10, 0) rotate(45)')
            .attr('text-anchor', 'start');
        d3.selectAll('.axis text').style('font-size', '8px');
        //GRIDS
        g.append('g')
            .attr('class', 'grid')
            .attr('transform', 'translate(0,' + height + ')')
            //.style('stroke-dasharray', ('3,3'))
            .style('fill', 'none')
            .style('stroke', '#ccc')
            .style('shape-rendering', 'crispEdges')
            .style('opacity', '0.25')
            .call(make_x_gridlines()
                .tickSize(-height)
                .tickFormat(''));
        g.append('g')
            .attr('class', 'grid')
            // .style('stroke-dasharray', ('3,3'))
            .style('fill', 'none')
            .style('stroke', '#ccc')
            .style('shape-rendering', 'crispEdges')
            .style('opacity', '0.25')
            .call(make_y_gridlines()
                .tickSize(-width)
                .tickFormat('')
            )

        // Define the div for the tooltip
        var div = d3.select('body').append('div')
            .style('opacity', 0)
            .style('padding', '2px')
            .style('position', 'absolute')
            .style('text-align', 'center')
            .style('background', 'lightsteelblue')
            .style('border-radius', '3px')
            .style('pointer-events', 'none')



        g.selectAll('.bubble1')
            .data(BalloonChart._fixedGroup.all())
            .enter()
            //.append('circle')
            .append('rect')
            .attr('class', 'bubble1 bubble')
            // .attr('cx', function (d) { return x(d.key[0]); })
            // .attr('cy', function (d) { return y(d.key[1]); })
            // .attr('r', d => 30 * (d.value - min) / (max - min))
            .attr('x', (d) => x(d.key[0]))
            .attr('y', (d) => y(d.key[1]) - 30 * (d.value - min) / (max - min))
            .attr('width', d => 30 * (d.value - min) / (max - min))
            .attr('height', d => 30 * (d.value - min) / (max - min))
            .style('fill', 'grey')

        g
            // .append('g')
            // .attr('class', 'BubbleGroup')
            .selectAll('.bubble2')
            .data(BalloonChart._group.all())
            .enter()
            .append('rect')
            .attr('class', 'bubbleBlue bubble')
            .attr('x', (d) => x(d.key[0]))
            .attr('y', (d) => y(d.key[1]) - 30 * (d.value - min) / (max - min))
            .attr('width', d => 30 * (d.value - min) / (max - min))
            .attr('height', d => 30 * (d.value - min) / (max - min))
            .style('fill', '#1f77b4')
            .on('mouseover', function (d, i) {
                div.transition()
                    .duration(50)
                    .style('opacity', 1);
                div.html(d.key[0] + '/' + d.key[1] + ':' + d.value)
                    .style('left', (d3.event.pageX) + 'px')
                    .style('top', (d3.event.pageY) + 'px');
            })
            .on('mouseout', function (d, i) {
                div.transition()
                    .duration('50')
                    .style('opacity', 0);
            })

        function make_x_gridlines() {
            return d3.axisBottom(x)
                .ticks(8)
        }
        function make_y_gridlines() {
            return d3.axisLeft(y)
                .ticks(5)
        }

        BalloonChart.x = x;
        BalloonChart.y = y;
        BalloonChart.max = max;
        BalloonChart.min = min;

        return svg;
    }

    public update_dimensions(e) {
        const currentFilter = [e.key[0], e.key[1]];
        const tempArray = [];
        let existed = false;
        BalloonChart.filters.forEach(elem => {
            if (elem[0] === currentFilter[0] && elem[1] === currentFilter[1]) {
                existed = true;
            } else {
                tempArray.push(elem);
            }
        });
        BalloonChart.filters = tempArray;
        if (existed === false) {
            BalloonChart.filters.push(currentFilter);
        }
        if (BalloonChart.filters.length === 0) {
            BalloonChart._dimension.filterAll();
        } else {
            BalloonChart._dimension.filterFunction(d => {
                let filter = null;
                BalloonChart.filters.forEach(elem => {
                    if (filter == null) {
                        filter = (d[1] === elem[1] && d[0] === elem[0]);
                    } else {
                        filter = filter || (d[1] === elem[1] && d[0] === elem[0]);
                    }
                });
                return filter;
            });
        }
        BalloonChart.notificationService_.emit(BalloonChart._GroupId);
        return this;
    }

    redraw() {
        console.log('Redraw Balloon')
        this.render();
        return null;
    }

}