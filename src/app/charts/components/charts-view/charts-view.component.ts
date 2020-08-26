import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { chartsStore } from '../../store';
import { Observable } from 'rxjs';
import { Widget } from '../../models';


@Component({
  selector: 'app-charts-view',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './charts-view.component.html',
  styleUrls: ['./charts-view.component.scss']
})
export class ChartsViewComponent implements OnInit {

  isEditMode$: Observable<boolean> = chartsStore.select('isEditMode');
  widgets$: Observable<Widget[]> = chartsStore.select('widgets');


  constructor() {}

  ngOnInit(): void {
  }

}
