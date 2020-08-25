import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import { FlagReflow } from '../../models';


@Component({
  selector: 'app-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart.component.html',
  styles: [` .s-100 { width: 100%; height: 100%; display: block; } `]
})
export class ChartComponent implements OnInit {

  @Input() chartOptions: Options;
  @Input() chartId: string = 'container' + (1000 + new Date().getMilliseconds()).toString().substr(1);

  @Input() set reflowChart(value: FlagReflow) {
    if (value){
      if (value.gridId === this.chartId) {
        // console.log('value from grid', value);
        this.chart.reflow();
      }
    }
  }

  Highcharts: typeof Highcharts = Highcharts;
  chart: Highcharts.Chart;

  getInstance(chart: Highcharts.Chart): void {
    this.chart = chart;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
