import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { D3Component } from './components/demo-libraries/d3/d3.component';
import { NgxChartsComponent } from './components/demo-libraries/ngx-charts/ngx-charts.component';
import { NgxEchartsComponent } from './components/demo-libraries/ngx-echarts/ngx-echarts.component';
import { AngularGoogleChartsComponent } from './components/demo-libraries/angular-google-charts/angular-google-charts.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import { GoogleChartsModule } from 'angular-google-charts';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    D3Component,
    NgxChartsComponent,
    NgxEchartsComponent,
    AngularGoogleChartsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GoogleChartsModule,
    NgxEchartsModule.forRoot({
      echarts
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
