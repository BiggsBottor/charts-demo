import { Options } from 'highcharts';

export class Widget {

    // Position on grid
    x?: number;
    y?: number;

    // Size
    w?: number; // Width
    h?: number; // Height

    // Other config
    dragAndDrop?: boolean;
    resizable?: boolean;
    title?: string;
    chartOptions?: Options;
    chartId?: string;

    // constructor(
    //     x?: number,
    //     y?: number,
    //     w?: number,
    //     h?: number,
    //     dragAndDrop?: boolean,
    //     resizable?: boolean,
    //     title?: string,
    //     chartOptions?: Options,
    //     chartId?: string
    // ) {
    //     if (x) { this.x = x; }
    //     if (y) { this.y = y; }
    //     if (w) { this.w = w; }
    //     if (h) { this.h = h; }
    //     if (dragAndDrop) { this.dragAndDrop = dragAndDrop; }
    //     if (resizable) { this.resizable = resizable; }
    //     if (title) { this.title = title; }
    //     if (chartOptions) { this.chartOptions = chartOptions; }
    //     if (chartId) { this.chartId = chartId; }
    // }

}

export interface FlagReflow {
    gridId: string;
}

