import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private tokenService: TokenService,
    private router: Router) { }

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

}
