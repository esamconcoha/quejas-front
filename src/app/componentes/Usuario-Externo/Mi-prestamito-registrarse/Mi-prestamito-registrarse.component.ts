import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Mi-prestamito-registrarse',
  templateUrl: './Mi-prestamito-registrarse.component.html',
  styleUrls: ['./Mi-prestamito-registrarse.component.css']
})
export class MiPrestamitoRegistrarseComponent implements OnInit {

  formularioCreacionUsuario: FormGroup= this.formBuilder.group({
    dpi: [],
    Nombre: [],
    apellidos: [],
    correo: [],
    password: [],
    numeroTelefono: [],

  })
  constructor(private router: Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

  Home(){
    this.router.navigate(['/menu-principal']);
  }
  irSesion(){
    this.router.navigate(['/iniciar-sesion']);
  }

}
