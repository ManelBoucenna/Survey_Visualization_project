export enum Task {
    Distribution = 'Distribution',
    Relationship = 'Relationship',
    TimeEvolution = 'TimeEvolution'
}

export enum Visualization {
    BarChart,
    DetailledBarChart,
    BoxChart,
    LineChart,
    BubbleChart,
    ParallelChart,
    BalloonChart,
    SankeyChart,
    StackedChart,
    BarBoxChart,
    ViolinChart,
    ViolinBoxChart,
    Lollipop
}

export enum Category {
    MultipleChoices = 'Multiple choices',
    RatingScale = 'Rating scale',
    Numerical = 'Numerical'
}

export enum ValidationStatus {
    Passed,
    Failed
}


export const Information = [
    'The absolute length of each bar represents the quantity/value of each category.',
    'The absolute length of each bar represents the quantity/value of each category.',
    'A box plot displays median, higher/lower quartiles and maximum/minimum.  Outliers may be plotted as individual points. The spacings between the different parts of the box indicate the degree of dispersion (spread) and skewness in the data, and show outliers. Source: www.datavizproject.com',
    '',
    'This chart displays three dimensions of data. Each entity with its triplet (v1, v2, v3) of associated data is plotted as a disk that expresses two of the vi values through the disk’s xy location and the third through its size. Source: www.datavizproject.com',
    'Variables are assigned to vertical axes that are parallel. Each line represents the values of one data through all the categories. Considering different axis arrangements may be of interest. Source: www.datavizproject.com',
    'It represents three dimensions.Each entity with its triplet (v1, v2, v3) of associated data is plotted as a disk that expresses two of the vi values through the disk’s xy location and the third through its size.',
    'Variables are assigned to vertical axes that are parallel. Categories are represented with blocks on each axis. The height of a block represents the size of the cluster and the height of a stream field represents the size of the components contained in both blocks connected by the stream field. Source: www.datavizproject.com',
    'Stacked chart uses the length of two or more stacked bars to represent the components of a total quantitative value across a range of different categorical values.Source: www.seeingdata.org',
    'The absolute length of each bar represents the quantity/value of each category. A box plot displays median, higher/lower quartiles and maximum/minimum. Source: www.datavizproject.com',
    'The violin plot is similar to box plots, except that they also show the probability density of the data at different values. Typically violin plots will include a marker for the median of the data and a box indicating the interquartile range, as in standard box plots. Source: www.datavizproject.com',
    'The violin plot is similar to box plots, except that they also show the probability density of the data at different values. Typically violin plots will include a marker for the median of the data and a box indicating the interquartile range, as in standard box plots.Source: www.datavizproject.com',
]