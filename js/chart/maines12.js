
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
        height:350,
     },
     title: {
        text: '监控时间段内调度并发总数对比统计'
     },
     xAxis: {
        categories: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日']
     },
     yAxis: {
        title: {
           text: '调度并发总数(单位：次)'
        }
     },
     series: [{
        name: '当天在监控时间段内的调度并发总数',
        data: [25, 10, 40, 52, 25, 28, 30, 40, 80, 70,10,24,50,50,60,70,50,80,80,90,85,60,45,90,80,38,67,50,90,20]
     }]
    });
    	
   chart2 = new Highcharts.Chart({
     chart: {
        renderTo: 'chart_2',
        type: 'line',
        height:350,
     },
     title: {
        text: '监控时间段内调度并发总数对比统计'
     },
     xAxis: {
        categories: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日']
     },
     yAxis: {
        title: {
           text: '调度并发总数(单位：次)'
        }
     },
     series: [{
        name: '当天在监控时间段内的调度并发总数',
        data: [25, 10, 40, 52, 25, 28, 30, 40, 80, 70,10,24,50,50,60,70,50,80,80,90,85,60,45,90,80,38,67,50,90,20]
     }]
    }); 	

    // Second chart initialization (pie chart)
    chart3 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_3',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 350,
        },
        title: {
            text: 'Pie chart diagram for the first developer'
        },
        tooltip: {
            pointFormat: '<b>{point.percentage}%</b>',
            percentageDecimals: 1
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
         series: [{
         type: 'pie',
            name: 'Dev #1',
            data: [
                ['Processing.js', 5],
                ['Impact.js', 10],
                ['Other', 20],
                ['Ease.js', 22],
                ['Box2D.js', 25],
                ['WebGL', 28],
                ['DOM', 30],
                ['CSS', 40],
                ['Canvas', 80],
                ['Javascript', 90]
            ]
         }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});