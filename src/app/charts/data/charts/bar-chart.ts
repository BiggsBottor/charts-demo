import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

export const BASIC_BAR: Options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region'
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        series: {
            animation: false
        },
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        type: 'bar',
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
    }, {
        type: 'bar',
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
    }, {
        type: 'bar',
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
    }, {
        type: 'bar',
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
    }]
};
