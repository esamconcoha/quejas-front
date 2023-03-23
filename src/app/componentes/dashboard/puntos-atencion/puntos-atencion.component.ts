import { Component, Input, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-puntos-atencion',
  templateUrl: './puntos-atencion.component.html',
  styleUrls: ['./puntos-atencion.component.css']
})
export class PuntosAtencionComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle): void {
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
}
