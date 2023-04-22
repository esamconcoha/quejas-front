import { TokenService } from './../../../../service/token.service';
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
    private tokenService: TokenService
  ) { 

    this.crearUserForm= this.formBuilder.group({
     
      dpi: [],
      Nombre: [],
      apellidos: [],
      correo: ['',[Validators.required, Validators.email]],
      password: [],
      numeroTelefono: [],
      id_cargo:[],
      idPuntoatencion:[]
      
      
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
  let fecha = new Date();69
  let desdeStr = `${fecha.getDate()}-${('0' + (fecha.getMonth() + 1)).slice(-2)}-${fecha.getFullYear()}`;

let rol:number=0;
const id_cargo= this.crearUserForm.get("id_cargo")?.value;
if(id_cargo===6){
  rol=3;
}else if(id_cargo===2 || id_cargo===3 || id_cargo===4){
  rol=2;
}else if(id_cargo===1){
  rol=1;
}else if(id_cargo===7){
  rol=4;
}else if(id_cargo===5){
  rol=2;
}else{
  rol=0;
}



  const user: Usuario = {
    idusuario: 0,
    dpi: this.crearUserForm.get("dpi")?.value,
    nombre: this.crearUserForm.get("Nombre")?.value,
    apellidos: this.crearUserForm.get("apellidos")?.value,
    correo: this.crearUserForm.get("correo")?.value,
    id_cargo: id_cargo,
    estado: 1,
    usuariocreo:  this.tokenService.getUserName(),
    fechacreacion: desdeStr,
    fechamodificacion: desdeStr,
    usuariomodifico:  this.tokenService.getUserName(),
    password: this.crearUserForm.get("password")?.value,
    rol: rol, 
    idpuntoatencion: this.crearUserForm.get("idPuntoatencion")?.value,
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

get correoElectronicoField(){
  return this.crearUserForm.get('correo');
} 

}


