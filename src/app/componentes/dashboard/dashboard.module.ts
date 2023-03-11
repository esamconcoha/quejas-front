import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PuntosAtencionComponent } from './puntos-atencion/puntos-atencion.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    PuntosAtencionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
