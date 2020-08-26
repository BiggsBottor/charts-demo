import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from '../../services';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isEditMode: boolean;

  @Input() set editMode(value: boolean) {
    if (this.isEditMode === undefined) { this.isEditMode = value; }
  }


  constructor(public chartsService: ChartsService) {  }

  ngOnInit(): void {  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    this.chartsService.toggleEditMode();
  }

}
