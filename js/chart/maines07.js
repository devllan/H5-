
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
        text: '各节点用户请求统计'
     },
     xAxis: {
        categories: ['节点1', '节点2', '节点3', '节点4', '节点5', '节点6', '节点7', '节点8', '节点9', '节点10', '节点11', '节点12','节点13','节点14','节点15']
     },
     yAxis: {
        title: {
           text: '用户请求次数(单位：次)'
        }
     },
     series: [ {
        name: '播放请求(单位：次)',
        data: [2534, 4435, 2218, 4330, 3430, 4525, 3330, 3260, 4580, 2270,3488,5599 ,1111,2222,3333]
     }, {
        name: '下载请求(单位：次)',
        data: [1351, 3333, 1236, 3450, 2450, 1125, 1250, 2560, 3430, 1100, 2232,2222, 3430, 4525, 3330]
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
            text: '各节点的用户播放请求百分比统计'
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
                ['节点11', 830],
                ['节点12', 350],
                ['节点13', 1030],
                ['节点14', 730],
                ['节点15', 450],
                
            ]
         }]
    });



  chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_3',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 350,
        },
        title: {
            text: '各节点的用户下载请求百分比统计'
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
                ['节点1', 522],
                ['节点2', 430],
                ['节点3', 840],
                ['节点4', 832],
                ['节点5', 335],
                ['节点6', 638],
                ['节点7', 450],
                ['节点8', 430],
                ['节点9', 850],
                ['节点10', 930],
                ['节点11', 830],
                ['节点12', 350],
                ['节点13', 1030],
                ['节点14', 730],
                ['节点15', 450],
                
            ]
         }]
    });
    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});