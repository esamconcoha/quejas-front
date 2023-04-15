import { Usuario, traerCargo } from './../../../Models/usuario';
import { UsuarioService } from 'src/app/service/Usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { traerRegiones } from 'src/app/componentes/Models/PuntosAtencion';
import { PuntosAtencionService } from 'src/app/service/PuntosAtencion.service';
import { traerPunto } from 'src/app/componentes/Models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

 
  crearUserForm: FormGroup;
traerPuntos: traerPunto[]=[];
traerCargo: traerCargo[]=[];


  constructor(
    private service: UsuarioService,
    private formBuilder:FormBuilder,
  ) { 

    this.crearUserForm= this.formBuilder.group({
      idpuntoatencion:[],
      dpi: [],
      Nombre: [],
      apellidos: [],
      correo: [],
      password: [],
      numeroTelefono: [],
      id_cargo:[]
      
    })
  }

  ngOnInit() {
    this.traerPuntosAtencion();
    this.traerCargos();
  }

traerPuntosAtencion(){
  this.service.puntos().subscribe((puntos) => {
    this.traerPuntos= puntos;
    console.log(this.traerPuntos);
  });
}

traerCargos(){
  this.service.cargo().subscribe((cargos) => {
    this.traerCargo= cargos;
    console.log(this.traerCargo);
  });
}

guardarUsuario(user?: Usuario) {
  this.service.registrarUsuario(user!).toPromise().then(dato => {
    Swal.fire('Usuario Creado', `El Usuario ${user!.nombre} ${user!.apellidos} ha sido creado con exito`, `success`)
    console.log(dato);
    
  },error => Swal.fire('ERROR', `Hubo problemas al crear el Usuario, Porfavor intenta de nuevo`, `error`))
}

CrearUsuario(): void {
  let fecha = new Date();
  let desdeStr = `${fecha.getDate()}-${('0' + (fecha.getMonth() + 1)).slice(-2)}-${fecha.getFullYear()}`;
  const user: Usuario = {
    idusuario: 0,
    dpi: this.crearUserForm.get("dpi")?.value,
    nombre: this.crearUserForm.get("Nombre")?.value,
    apellidos: this.crearUserForm.get("apellidos")?.value,
    correo: this.crearUserForm.get("correo")?.value,
    id_cargo: this.crearUserForm.get("id_cargo")?.value,
    estado: 1,
    usuariocreo:  this.crearUserForm.get("dpi")?.value,
    fechacreacion: desdeStr,
    fechamodificacion: desdeStr,
    usuariomodifico:  this.crearUserForm.get("dpi")?.value,
    password: this.crearUserForm.get("password")?.value,
    /* rol: 6, */
    idpuntoatencion: this.crearUserForm.get("idpuntoatencion")?.value,
    telefono: this.crearUserForm.get("numeroTelefono")?.value
  }
  Swal.fire({
    title: '¿Estas seguro?',
    icon: 'warning',
    text: '¿Está seguro de continuar?',
    showCancelButton: true,
    confirmButtonText: 'Si , estoy seguro',
    cancelButtonText: 'No, cancelar',
    
  }).then((result) => {
   console.log(user);
   if (result.isConfirmed) {
    this.guardarUsuario(user);
}

  })
}


}


