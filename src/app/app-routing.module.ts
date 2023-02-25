import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { MiPrestamitoRegistrarseComponent } from './componentes/Usuario-Externo/Mi-prestamito-registrarse/Mi-prestamito-registrarse.component';

const routes: Routes = [
  {path : 'menu-principal', component:HomeComponent},
  {path:'',redirectTo:'menu-principal',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'registrarse-usuario',component:MiPrestamitoRegistrarseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
