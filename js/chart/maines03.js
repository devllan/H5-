
// Change Chart type function
function ChangeChartType(chart, series, newType) {
    newType = newType.toLowerCase();
    for (var i = 0; i < series.length; i++) {
        var srs = series[0];
        try {
            srs.chart.addSeries({
                type: newType,
                stack: srs.stack,
                yaxis: srs.yaxis,
                name: srs.name,
                color: srs.color,
                data: srs.options.data
            },
            false);
            series[0].remove();
        } catch (e) {
        }
    }
}

// Two charts definition
var chart1, chart2;

// Once DOM (document) is finished loading
$(document).ready(function() {

    // First chart initialization
    chart1 = new Highcharts.Chart({
     chart: {
        renderTo: 'chart_1',
        type: 'line',
        height: 300,
     },
     title: {
        text: '当前资源类型的访问次数统计'
     },
     xAxis: {
        categories: ['1月', '2月', '3月', '4月', '5月']
     },
     yAxis: {
        title: {
           text: '当前资源类型的访问次数(单位:次)'
        }
     },
     series: [{
        name: '当前资源类型的月访问次数',
        data: [5545, 4422, 4420, 2562, 4925]
     }]
    });

    // Second chart initialization (pie chart)
     chart2 = new Highcharts.Chart({
     chart: {
        renderTo: 'chart_2',
        type: 'column',
        height: 300,
     },
     title: {
        text: '当前资源类型的访问时长统计'
     },
     xAxis: {
        categories: ['1月', '2月', '3月', '4月', '5月']
     },
     yAxis: {
        title: {
           text: '当前资源类型的访问时长(单位:小时)'
        }
     },
     series: [{
        name: '当前资源类型的月访问时长',
        data: [545, 442, 420, 252, 925]
     }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});