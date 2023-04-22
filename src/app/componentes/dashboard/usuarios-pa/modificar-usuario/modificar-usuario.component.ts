import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenService } from 'src/app/service/token.service';
import { ModificarTipoComponent } from '../../tipo-quejas/modificar-tipo/modificar-tipo.component';
import { UsuarioService } from 'src/app/service/Usuario.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { traerPunto, traerCargo, Usuario } from 'src/app/componentes/Models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  idUsuario:number;
  traerPuntos: traerPunto[]=[];
traerCargo: traerCargo[]=[];
formularioModificarUsuario: FormGroup;

  constructor(
    private service: UsuarioService,
    private dialogRef: MatDialogRef<ModificarTipoComponent>,
    private tokenService: TokenService,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.idUsuario=data.idUsuario;

    this.formularioModificarUsuario =this.formBuilder.group({
      Nombre: [],
      apellidos: [],
      idPuntoatencion:[],
      id_cargo:[],
      dpi:[],
      correo:['',[Validators.required, Validators.email]],
      estado: []
    })
   }

  ngOnInit() {
    this.traerPuntosAtencion();
    this.traerCargos();
  }




  onCancelar(): void {
    this.dialogRef.close();
  }


  get correoElectronicoField(){
    return this.formularioModificarUsuario.get('correo');
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

validarCorreo(){
  if(this.formularioModificarUsuario.get('correo')?.invalid){
    Swal.fire({
      title: 'Error',
      text: 'Por favor ingrese un correo valido.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }else{
    this.modificarUsuario();
  }
}

  modificarUsuario(){
    let fecha = new Date();
    let desdeStr = `${fecha.getDate()}-${('0' + (fecha.getMonth() + 1)).slice(-2)}-${fecha.getFullYear()}`;

  

    if (this.formularioModificarUsuario.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor complete los campos obligatorios.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }

      let rol:number=0;

const id_cargo= this.formularioModificarUsuario.get("id_cargo")?.value;
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

      const modificarUsuarios: Usuario={
        nombre: this.formularioModificarUsuario.get("Nombre")?.value,
        apellidos: this.formularioModificarUsuario.get("apellidos")?.value,
        id_cargo: id_cargo,
        rol: rol, 
        idpuntoatencion: this.formularioModificarUsuario.get("idPuntoatencion")?.value,
        estado: this.formularioModificarUsuario.get('estado')?.value ? 1 : 2,
        correo: this.formularioModificarUsuario.get('correo')?.value,
        dpi: this.formularioModificarUsuario.get('dpi')?.value,
        fechamodificacion: desdeStr,
        usuariomodifico: this.tokenService.getUserName(),
      }

       this.service.modificarUsuario(this.idUsuario, modificarUsuarios).toPromise().then(USUARIO =>{
        const valorEstado= this.formularioModificarUsuario.get('estado')?.value? 1 : 2;
        if(valorEstado===2){
          Swal.fire({
            title: 'Se modificaron correctamente los datos del usuario del punto de atención',
            text: '',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }else{
          Swal.fire({
            title: 'Datos actualizados',
            text: '',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }


       })

  

  }


  
}
