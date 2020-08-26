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
    // console.log('start state widgets', chartsStore.getValue('widgets'));
    // console.log('start state widgets2save', this.widgets2Save);
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
      // title: `${titleToAdd.charAt(0).toUpperCase()}${titleToAdd.slice(1)} Graph  - Id: ${idToAdd}`, // capitalize the type name
      title: `${capitalize(titleToAdd)} Graph  - Id: ${idToAdd}`,
      chartOptions: chartToDraw,
      chartId: idToAdd
    };
    const tempWidgets: Widget [] = chartsStore.getValue('widgets');
    tempWidgets.push( graph );

    chartsStore.set('widgets', tempWidgets);
  }

  saveGridState(): void {
    // console.log('%csave state widgets2save', 'color: lightseagreen', this.widgets2Save);
    // console.log('%csave state widgets', 'color: lightseagreen', chartsStore.getValue('widgets'));
    this.widgets2Save = cloneDeep(chartsStore.getValue('widgets'));
  }

  UndoGridState(): void {
    // console.log('%cundo state widgets', 'color: red', chartsStore.getValue('widgets'));
    // console.log('%cundo state widgets2save', 'color: red', this.widgets2Save);
    chartsStore.set('widgets', this.widgets2Save);

    // after undo the changes, it trigger the window resize event to reflow the charts correctly
    // window.dispatchEvent(new Event('resize'));
  }

}
