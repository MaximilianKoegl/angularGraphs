import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {D3Component} from './components/demo-libraries/d3/d3.component';
import {NgxChartsComponent} from './components/demo-libraries/ngx-charts/ngx-charts.component';
import {NgxEchartsComponent} from './components/demo-libraries/ngx-echarts/ngx-echarts.component';
import {AngularGoogleChartsComponent} from './components/demo-libraries/angular-google-charts/angular-google-charts.component';
import {libraries} from './models/libraries.model';

const routes: Routes = [
  ...libraries.map(library => ({path: library.path, component: library.component })),
  { path: '', component: D3Component, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
