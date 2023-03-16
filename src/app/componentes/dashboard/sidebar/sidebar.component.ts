import { navbarData } from './nav-data';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';


interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  
  collapsed=false;
  screenWidth: 0 = 0;
  navData=navbarData;

  constructor(private tokenService: TokenService,
    private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  // autenticar() {  
  //   if(this.tokenService.getToken() == null){
  //     /*
  //     Swal.fire({
  //       title: '¿QUIEN SOS?',
  //       text: 'No se quien shota sos,pero te voy a recagar a piñas',
  //       imageUrl: '../../../assets/imagenes/Autenticacion.jpg',
  //       imageWidth: 400,
  //       imageHeight: 200,
  //       imageAlt: 'Custom image',
  //     })
  //     */     
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Usuario no autenticado',
  //       text: 'Por favor inicie sesión para continuar',
  //     })
  //     this.router.navigate(['login']);
  //   } 

  // }



  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,  screenWidth: this.screenWidth})
  }

  closeSidenav():void{
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed: this.collapsed,  screenWidth: this.screenWidth})
  }
}


