import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SesionService } from 'src/app/service/sesion.service';
import Swal from 'sweetalert2';
import { usuarioSesion } from '../Models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogueo:FormGroup;


  constructor(private fb:FormBuilder, private sesionService:SesionService)  { 
    this.formLogueo= this.fb.group({
      usuario:['', Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }


ingresar(){
  console.log(this.formLogueo.value);

  const sesion:usuarioSesion={
    username:this.formLogueo.get('usuario')?.value,
    password:this.formLogueo.get('password')?.value
  }

  this.sesionService.iniciarSesion(sesion).subscribe(dato=>{
    Swal.fire('Bienvenido', `Bienvenido ${sesion.username}`, `success`)
    console.log(dato);

  },error => Swal.fire('ERROR', `El usuario y/o la contraseña ingresados son incorrectos por favor intente de nuevo`, `error`))

}

}
