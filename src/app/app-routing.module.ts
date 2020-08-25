import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsViewComponent } from './charts/components';

const routes: Routes = [
  {path: '', component: ChartsViewComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
