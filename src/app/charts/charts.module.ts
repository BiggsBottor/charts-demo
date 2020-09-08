import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- MODULES -- //
import { GridsterModule } from 'angular2gridster';
import { HighchartsChartModule } from 'highcharts-angular';

// -- ResizeObservable Module -- //
import { NgxResizeObserverModule } from 'ngx-resize-observer';

// -- Angular Material Modules -- //
import { MatIconModule } from '@angular/material/icon';

// -- COMPONENTS -- //
import {
  ChartsViewComponent,
  TopBarComponent,
  GridComponent,
  ChartComponent
} from './components';

// -- PIPES -- //
import {
  DebounceTimePipe,
  DelayPipe,
  DistinctUntilChangedPipe
} from '../shared';


@NgModule({
  declarations: [
    ChartsViewComponent,
    TopBarComponent,
    GridComponent,
    ChartComponent,
    DebounceTimePipe,
    DelayPipe,
    DistinctUntilChangedPipe
  ],
  imports: [
    CommonModule,
    GridsterModule.forRoot(),
    HighchartsChartModule,
    NgxResizeObserverModule,
    MatIconModule
  ],
  exports: []
})
export class ChartsModule { }
