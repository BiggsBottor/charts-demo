import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import { FlagReflow } from '../../models';


@Component({
  selector: 'app-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart.component.html',
  styles: [` .s-100 { width: 100%; height: 100%; display: block; } `]
})
export class ChartComponent {

  @Input() chartId: string = 'container' + (1000 + new Date().getMilliseconds()).toString().substr(1);
  @Input() chartOptions: Options;

  @Input() set reflowChart(value: FlagReflow) {
    if (value && this.chart && value.gridId === this.chartId) {
      console.log('%cChart Input', 'color: deeppink', value.gridId); // FIXME: just to show when is triggered
      this.chart.reflow();
    }
  }

  Highcharts: typeof Highcharts = Highcharts;
  chart: Highcharts.Chart;

  // to genereate a variable instance of this chart and be able to trigger methods like reflow
  getInstance(chart: Highcharts.Chart): void {
    this.chart = chart;
  }

}
