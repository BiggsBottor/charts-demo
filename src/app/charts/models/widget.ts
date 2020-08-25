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

}

export interface FlagReflow {
    gridId: string;
}

