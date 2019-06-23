import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavigationComponent } from './shared/side-navigation/side-navigation.component';
import { SidebarModule } from 'ng-sidebar';

import { BarchartComponent } from './components/barchart/barchart.component';
import { GridDashboardComponent } from './layout/grid-dashboard/grid-dashboard.component';

import { GridsterModule } from 'angular-gridster2'; /* developed with angular-gridster2 new*/

// import { GridsterModule } from 'angular2gridster';
import { NgGridModule } from 'angular2-grid';
import { DonoughtChartComponent } from './components/donought-chart/donought-chart.component';


const Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
    SideNavigationComponent,
    BarchartComponent,
    GridDashboardComponent,
    DonoughtChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    GridsterModule,
    NgGridModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
