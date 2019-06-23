import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { GridDashboardComponent } from './layout/grid-dashboard/grid-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path : 'dashboard', component: DashboardComponent},
  {path: 'dashboard2', component: GridDashboardComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
