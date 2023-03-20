import { UsuariosPaComponent } from './usuarios-pa/usuarios-pa.component';
import { ReporteAdministrativoComponent } from './reporte-administrativo/reporte-administrativo.component';
import { SeguimientoCentralizadorComponent } from './seguimiento-centralizador/seguimiento-centralizador.component';
import { ResolucionQuejaComponent } from './resolucion-queja/resolucion-queja.component';
import { IngresoQuejaComponent } from './ingreso-queja/ingreso-queja.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PuntosAtencionComponent } from './puntos-atencion/puntos-atencion.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path:'',
  
  children:[
   {path:'puntos-atencion',component:PuntosAtencionComponent},
   {path:'usuarios-pa',component:UsuariosPaComponent},
   {path:'ingreso-queja',component:IngresoQuejaComponent},
   {path:'asignacion-queja',component:IngresoQuejaComponent},
   {path:'resolucion-queja',component:ResolucionQuejaComponent},
   {path:'seguimiento-centralizador',component:SeguimientoCentralizadorComponent},
   {path:'reporte-administrativo',component:ReporteAdministrativoComponent},
   {path:'sidebar',component:SidebarComponent},


 

   {path:'principal',component:DashboardComponent},
    {path:'',redirectTo:'dashboard/principal'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
