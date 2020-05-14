
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
        height:400,
     },
     title: {
        text: '选中设备在2015年CPU使用量的波峰值/波谷值/平均值'
     },
     xAxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月','11月','12月']
     },
     yAxis: {
        title: {
           text: '使用量(单位:%)'
        }
     },
     series: [{
        name: '平均值',
        data: [30, 22, 45, 66, 75, 32, 45, 66,67, 46,80,67]
     },	{
     	name: '波峰值',
        data: [45, 34, 67, 77, 89, 58, 67, 88, 90, 76,87,90]
     },	{
     	name: '波谷值',
        data: [23, 17, 34, 45, 65, 26, 38, 56, 30, 42,67,55]
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