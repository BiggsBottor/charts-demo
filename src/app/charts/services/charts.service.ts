import { Injectable } from '@angular/core';
import { DEMO_GRAPHS, CHARTS, IDGenerator } from '../data';
import { Widget } from '../models';
import { Options } from 'highcharts';
import { chartsStore } from '../store';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor() {
    chartsStore.set('widgets', DEMO_GRAPHS);
  }

  toggleEditMode(): void {
    chartsStore.set('isEditMode', !chartsStore.getValue('isEditMode'));
  }

  addWidget(chartType?: string): void {
    let chartToDraw: Options;
    let titleToAdd: string;
    const idToAdd: string = IDGenerator();
    if (chartType) {
      chartToDraw = CHARTS[chartType];
      titleToAdd = chartType;
    }
    else {
      chartToDraw = CHARTS.default;
      titleToAdd = 'default';
    }
    const graph = {
      // x: 0, y: 0, // FIXME: if there's no responsiveOptions in the gridster options definition, it's values must be commented
      w: 6, h: 5,
      dragAndDrop: true,
      resizable: true,
      title: `${titleToAdd.charAt(0).toUpperCase()}${titleToAdd.slice(1)} Graph  - Id: ${idToAdd}`,
      chartOptions: chartToDraw,
      chartId: idToAdd
    };
    const tempWidgets: Widget [] = chartsStore.getValue('widgets');
    tempWidgets.push( graph );

    chartsStore.set('widgets', tempWidgets);
  }

}
