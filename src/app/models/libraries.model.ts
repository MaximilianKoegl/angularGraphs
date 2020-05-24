import {D3Component} from '../components/demo-libraries/d3/d3.component';
import {NgxChartsComponent} from '../components/demo-libraries/ngx-charts/ngx-charts.component';
import {NgxEchartsComponent} from '../components/demo-libraries/ngx-echarts/ngx-echarts.component';
import {AngularGoogleChartsComponent} from '../components/demo-libraries/angular-google-charts/angular-google-charts.component';

export const libraries = [
  { title: 'D3.js', path: 'd3', component: D3Component},
  { title: 'ngx-charts', path: 'ngx-charts', component: NgxChartsComponent},
  { title: 'ngx-echarts', path: 'ngx-echarts', component: NgxEchartsComponent},
  { title: 'google-angular-charts', path: 'google-angular-charts', component: AngularGoogleChartsComponent}
  ];
