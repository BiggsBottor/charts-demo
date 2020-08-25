import { Component, OnInit, ViewEncapsulation, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { IGridsterOptions, IGridsterDraggableOptions, GridsterComponent } from 'angular2gridster';
import { Subject } from 'rxjs';
import { Widget, FlagReflow } from '../../models';

@Component({
  selector: 'app-grid',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {

  @ViewChild('Grid') gridEl!: GridsterComponent;
  @Input() set editMode(toggle: boolean) {
    if (this.gridEl !== undefined) {
      this.gridEl
            .setOption('dragAndDrop', toggle)
            .setOption('resizable', toggle)
            .reload();
    }
  }

  // @Input() widgets: Widget [] = [];
  @Input() set widgets( widgets: Widget[] ) {
    // console.log('grid array by set', widgets);
    this.widgetsToDraw = widgets;
  }

  widgetsToDraw: Widget [] = [];


  sReflow: Subject<FlagReflow> = new Subject<FlagReflow>();

  // -- Gridster Options -- //
  gridsterDraggableOptions: IGridsterDraggableOptions = { handlerClass: 'panel-heading' };
  gridsterOptions: IGridsterOptions = {
    // lanes: 6, // amount of lanes (cells) in the grid FIXME: uncomment this if breackpoints are also uncommented and comment the next line
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
    responsiveToParent: true,
    // responsiveOptions: [
    //   { breakpoint: null, lanes: 3 },
    //   { breakpoint: 'sm', lanes: 6 , minWidth: 500  },
    //   { breakpoint: 'md', lanes: 8 , minWidth: 768  },
    //   { breakpoint: 'lg', lanes: 12, minWidth: 992  },
    //   { breakpoint: 'xl', lanes: 18, minWidth: 1200 }
    // ]
  };

  constructor() { }

  ngOnInit(): void { }

  // consoleDOM(): void {
  //   console.log(this.widgetsToDraw);
  // }

  trackByFn(index: any, item: any): any {
    return item.chartId;
  }

  emitReflow(gridIdToSend: string, event: any): void {
    if (event.changes.includes('h') || event.changes.includes('w')){
      this.sReflow.next({ gridId: gridIdToSend });
    }
  }

  remove($event: any, index: number): void {
    $event.preventDefault();
    this.widgetsToDraw.splice(index, 1);
  }

  optionsChange(options: IGridsterOptions): void {
    this.gridsterOptions = options;
  }

}
