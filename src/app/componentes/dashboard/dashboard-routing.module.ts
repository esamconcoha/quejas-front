import { SidebarComponent } from './sidebar/sidebar.component';
import { PuntosAtencionComponent } from './puntos-atencion/puntos-atencion.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {path:'',
  children:[
   {path:'puntos-atencion',component:PuntosAtencionComponent},
   {path:'sidebar',component:SidebarComponent},
   {path:'dashboard',component:DashboardComponent},
   {path:'reportes',component:ReportesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
