import { Store } from '../../shared/store';
import { Widget } from '../models';

export interface ChartsStoreState {
    // Widgets collection to show
    widgets: Widget[];

    // Control if is in edit mode or not
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
