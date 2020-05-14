/**
 *
 * Active Charts using Highcharts demonstration
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Script Tutorials
 * http://www.script-tutorials.com/
 */

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
        text: '各资源类型的访问频次热度统计'
     },
     xAxis: {
        categories: ['资源类型1', '资源类型2', '资源类型3', '资源类型4', '资源类型5', '资源类型6', '资源类型7', '资源类型8', '资源类型9', '资源类型10', '资源类型11', '资源类型12']
     },
     yAxis: {
        title: {
           text: '用户访问次数(单位：次)'
        }
     },
     series: [{
        name: '各资源类型的用户访问次数',
        data: [1022, 430, 840, 532,135, 238, 450, 530, 850, 930,830,350]
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
            text: '各资源类型的访问频次热度百分比统计'
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
                ['资源类型1', 1022],
                ['资源类型2', 430],
                ['资源类型3', 840],
                ['资源类型4', 532],
                ['资源类型5', 135],
                ['资源类型6', 238],
                ['资源类型7', 450],
                ['资源类型8', 530],
                ['资源类型9', 850],
                ['资源类型10', 930],
                ['资源类型11', 830],
                ['资源类型12', 350],
                
            ]
         }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});