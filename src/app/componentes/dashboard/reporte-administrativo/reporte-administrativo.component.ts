import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }
  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
