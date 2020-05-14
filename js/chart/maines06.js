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
        text: '网站访问频次对比统计'
     },
     xAxis: {
        categories: ['文化共享', '一体机', '优酷', '土豆', '爱奇艺', 'qq影音', '风行', '乐视', '华数', '百度','腾讯','阿里']
     },
     yAxis: {
        title: {
           text: '网站访问量(单位:次)'
        }
     },
     series: [{
        name: '网站访问总量',
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
            text: '网站访问频次百分比对比统计'
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
                ['文化共享', 1022],
                ['一体机', 430],
                ['优酷', 840],
                ['土豆', 532],
                ['爱奇艺', 135],
                ['qq影音', 238],
                ['风行', 450],
                ['乐视', 530],
                ['华数', 850],
                ['百度', 930],
                ['腾讯', 830],
                ['阿里', 350],
                
            ]
         }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});