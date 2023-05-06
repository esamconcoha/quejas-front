import { tablaAsignacionQueja } from './../../Models/Queja';
import { Component, OnInit } from '@angular/core';
import { QuejaService } from 'src/app/service/Queja.service';
interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}

@Component({
  selector: 'app-asignacion-queja',
  templateUrl: './asignacion-queja.component.html',
  styleUrls: ['./asignacion-queja.component.css']
})
export class AsignacionQuejaComponent implements OnInit {
  isSideNavCollapsed=false;
  screenWidth: number = 0;
  Queja: tablaAsignacionQueja[]=[];


  constructor(
    private service: QuejaService
  ) { }

  ngOnInit() {
    this.traerQuejas();
  }
  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    let styleclass = '';
    if (this.isSideNavCollapsed && this.screenWidth > 768) {
      styleclass = 'body-trimmed';
    } else if (this.isSideNavCollapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleclass = 'body-md-screen';
    }
    return styleclass;
  }



  traerQuejas(){
  this.service.tablaAsignacionQueja().subscribe(quejas=>{
    this.Queja=quejas;
  })
  }


}
