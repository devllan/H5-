
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
        type: 'column',
        height: 300,
     },
     title: {
        text: '历史并发统计'
     },
     xAxis: {
        categories: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00','16:00','17:00','18:00']
     },
     yAxis: {
        title: {
           text: '调度并发数(单位:次)'
        }
     },
     series: [{
        name: '各时间点调度并发数',
        data: [555, 442, 320, 252, 575, 228, 430, 640, 750, 550,480,300]
     }]
    });

    // Second chart initialization (pie chart)
     chart2 = new Highcharts.Chart({
     chart: {
        renderTo: 'chart_2',
        type: 'line',
        height: 300,
     },
     title: {
        text: '历史并发增量统计'
     },
     xAxis: {
        categories: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00','16:00','17:00','18:00']
     },
     yAxis: {
        title: {
           text: '调度并发增量数(单位:百分比%)'
        }
     },
     series: [{
        name: '各时间点调度并发增量',
        data: [5,-14, -9, -10, 35, -28, 23, 34, 45, -25,-8,-15]
     }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});