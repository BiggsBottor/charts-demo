import { Component, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { IGridsterOptions, IGridsterDraggableOptions, GridsterComponent } from 'angular2gridster';
import { Widget, FlagReflow } from '../../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map, delay } from 'rxjs/operators'; // Just Testing


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent {

  // -- Edit Mode Configuration -- //
  @ViewChild('Grid') gridEl!: GridsterComponent;
  @Input() set editMode(toggle: boolean) {
    if (this.gridEl !== undefined) {
      this.gridEl
            .setOption('dragAndDrop', toggle)
            .setOption('resizable', toggle)
            .reload();
    }
  }

  // -- Widget's array -- //
  widgetsToDraw: Widget [] = [];
  @Input() set widgets( widgets: Widget[] ) {
    this.widgetsToDraw = widgets;
  }

  // tslint:disable: no-inferrable-types
  controlFlag: string = null;
  isDifferent: boolean = false;
  // -- Observer that control the chart's reflow to fit correctly -- //
  sReflow: BehaviorSubject<FlagReflow> = new BehaviorSubject<FlagReflow>({ gridId: null });
  // reflow$: Observable<FlagReflow> = this.sReflow.asObservable()
  //           .pipe(
  //             delay(100)
  //           );

  // -- Gridster Options -- //
  gridsterDraggableOptions: IGridsterDraggableOptions = { handlerClass: 'panel-heading' };
  gridsterOptions: IGridsterOptions = {
    lanes: 18, // amount of lanes (cells) in the grid
    direction: 'vertical', // floating top - vertical, left - horizontal
    floating: false, // enable/disable "gravity" to the elements to be able to float freely or not
    dragAndDrop: false, // enable/disable drag and drop for all items in grid
    resizable: false, // enable/disable resizing by drag and drop for all items in grid
    resizeHandles: { s: true, e: true, se: true },
    widthHeightRatio: 1, // proportion between item width and height
    lines: { visible: true, color: '#afafaf', width: 2 }, // Draw background lines for reference
    shrink: true,
    useCSSTransforms: true,
    responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
    responsiveDebounce: 50, // window resize debounce time
    responsiveSizes: true,
    responsiveToParent: true
  };


  trackByFn(item: Widget): string {
    return item.chartId;
  }

  emitReflow(gridIdToSend: string): void {
     // send the order of reflow to the children component with a specific id
    this.sReflow.next({ gridId: gridIdToSend });
  }

  remove($event: any, index: number): void {
    $event.preventDefault();
    this.widgetsToDraw.splice(index, 1);
  }

}
