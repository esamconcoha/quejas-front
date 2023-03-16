import { Component, OnInit } from '@angular/core';
interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}
@Component({
  selector: 'app-ingreso-queja',
  templateUrl: './ingreso-queja.component.html',
  styleUrls: ['./ingreso-queja.component.css']
})
export class IngresoQuejaComponent implements OnInit {
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
