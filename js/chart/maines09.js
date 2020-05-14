
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
        text: '各节点命中率统计'
     },
     xAxis: {
        categories: ['节点1', '节点2', '节点3', '节点4', '节点5', '节点6', '节点7', '节点8', '节点9', '节点10']
     },
     yAxis: {
        title: {
           text: '用户访问命中率(单位:百分比%)'
        }
     },
     series: [ {
        name: '各节点命中率',
        data: [25, 35, 28, 43, 50, 75, 80, 60, 80, 70]
     }]
    });

    // Second chart initialization (pie chart)
    chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_2',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,

            height: 350,
        },
        title: {
            text: '各节点命中率百分比统计'
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
                ['节点1', 1022],
                ['节点2', 430],
                ['节点3', 840],
                ['节点4', 532],
                ['节点5', 135],
                ['节点6', 238],
                ['节点7', 450],
                ['节点8', 530],
                ['节点9', 850],
                ['节点10', 930],
               
                
            ]
         }]
    });



  
    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});