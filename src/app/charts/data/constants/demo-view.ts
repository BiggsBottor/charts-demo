import { Widget } from '../../models';
import { BASIC_AREA } from '../charts/area-chart';
import { BASIC_BAR } from '../charts/bar-chart';
import { BASIC_COLUMN } from '../charts/column-chart';
import { BASIC_LINE } from '../charts/line-chart';
import { BASIC_PIE } from '../charts/pie-chart';

export function IDGenerator(): string {
  return 'container' + (1000 + new Date().getMilliseconds()).toString().substr(1);
}


// Charts Options from highcharts
export const CHARTS: any = {
    default: {
      title: {
        text: 'Simple line chart'
      },
      plotOptions: {
        series: {
          animation: false
        }
      },
      series: [
        {
          type: 'line',
          data: [1, 2, 3]
        }
      ]
    },
    line: BASIC_LINE,
    bar: BASIC_BAR,
    column: BASIC_COLUMN,
    area: BASIC_AREA,
    pie: BASIC_PIE
  };

export const DEMO_GRAPHS: Widget[] = [
    {
        w: 6, h: 5,
        dragAndDrop: true,
        resizable: true,
        title: `Default Graph - Id: container1`,
        chartOptions: CHARTS.default,
        chartId: 'container' + 1
    },
    {
        w: 6, h: 5,
        dragAndDrop: true,
        resizable: true,
        title: `Line Graph - Id: container2`,
        chartOptions: CHARTS.line,
        chartId: 'container' + 2
    },
    {
        w: 6, h: 5,
        dragAndDrop: true,
        resizable: true,
        title: `Bar Graph  - Id: container3`,
        chartOptions: CHARTS.bar,
        chartId: 'container' + 3
    },
    {
        w: 6, h: 5,
        dragAndDrop: true,
        resizable: true,
        title: `Column Graph - Id: container4`,
        chartOptions: CHARTS.column,
        chartId: 'container' + 4
    },
    {
        w: 6, h: 5,
        dragAndDrop: true,
        resizable: true,
        title: `Area Graph - Id: container5`,
        chartOptions: CHARTS.area,
        chartId: 'container' + 5
    },
    {
        w: 6, h: 5,
        dragAndDrop: true,
        resizable: true,
        title: `Pie Graph - Id: container6`,
        chartOptions: CHARTS.pie,
        chartId: 'container' + 6
    }
];
