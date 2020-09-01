import { Injectable } from '@angular/core';
import { DEMO_GRAPHS, CHARTS, IDGenerator } from '../data';
import { Widget } from '../models';
import { Options } from 'highcharts';
import { chartsStore } from '../store';
import { cloneDeep, capitalize } from 'lodash-es';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private widgets2Save: Widget[] = [];

  constructor() {
    // default widgets state
    chartsStore.set('widgets', DEMO_GRAPHS);
    this.widgets2Save = DEMO_GRAPHS;
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
      w: 6, h: 5,
      dragAndDrop: true,
      resizable: true,
      title: `${capitalize(titleToAdd)} Graph  - Id: ${idToAdd}`,
      chartOptions: chartToDraw,
      chartId: idToAdd
    };
    const tempWidgets: Widget [] = chartsStore.getValue('widgets');
    tempWidgets.push( graph );

    chartsStore.set('widgets', tempWidgets);
  }

  saveGridState(): void {
    this.widgets2Save = cloneDeep(chartsStore.getValue('widgets'));
  }

  UndoGridState(): void {
    chartsStore.set('widgets', this.widgets2Save);
  }

}
