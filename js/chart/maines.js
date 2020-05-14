
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
        text: '监控时间段平均并发数与最高并发数统计'
     },
     xAxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月','11月','12月']
     },
     yAxis: {
        title: {
           text: '调度并发数(单位:次)'
        }
     },
     series: [{
        name: '月平均调度并发数',
        data: [2545, 3422, 3420, 1562, 3025, 1428, 2430, 3640,1850, 3550,2480,1000]
     },	{
     	name: '月最高调度并发数',
        data: [5545, 4422, 6020, 2562, 4925, 2128, 3430, 4640, 4850, 6550,4480,3000]
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
        text: '年访问次数统计'
     },
     xAxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月','11月','12月']
     },
     yAxis: {
        title: {
           text: '访问次数(单位:次)'
        }
     },
     series: [{
        name: '月访问次数',
        data: [5545, 4422, 4420, 2562, 4925, 2128, 3430, 4640, 4850, 6550,4480,3000]
     }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});