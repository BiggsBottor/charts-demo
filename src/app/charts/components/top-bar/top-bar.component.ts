import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from '../../services';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  // tslint:disable: no-inferrable-types

  @Input() isEditMode: boolean = false;


  constructor(public chartsService: ChartsService) { }

  ngOnInit(): void {}

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    this.chartsService.toggleEditMode();
  }

}
