import { Component, OnInit } from '@angular/core';
import { QuejaService } from 'src/app/service/Queja.service';
interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}
@Component({
  selector: 'app-reporte-administrativo',
  templateUrl: './reporte-administrativo.component.html',
  styleUrls: ['./reporte-administrativo.component.css']
})
export class ReporteAdministrativoComponent implements OnInit {
  isSideNavCollapsed=false;
  screenWidth: number = 0;
  constructor(
    private quejaServicio:QuejaService
    ) { }

  ngOnInit() {
    this.traerQuejas();
    this.obtenerEstado(1);
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
  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  traerQuejas(){
    this.quejaServicio.listarQuejaPorPuntoAtencion(1).subscribe(dato =>{
      console.log(dato);
    })
  }

  obtenerEstado(estado:number){
    this.quejaServicio.listarPorEstado(estado).subscribe(dato =>{
      console.log(dato);
    }
    )
  }

}
