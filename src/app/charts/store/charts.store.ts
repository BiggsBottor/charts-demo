import { Store } from '../../shared/store';
import { Widget } from '../models';

export interface ChartsStoreState {
    // Widgets collection
    widgets: Widget[];

    // control if is in edit mode
    isEditMode: boolean;
}

class ChartsStore extends Store<ChartsStoreState> {
    constructor() {
        super({
            widgets: [],
            isEditMode: false
        });
    }
}

export const chartsStore = new ChartsStore();
