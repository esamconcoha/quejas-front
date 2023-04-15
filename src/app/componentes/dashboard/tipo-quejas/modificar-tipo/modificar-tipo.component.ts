import { modificarPunto } from './../../../Models/PuntosAtencion';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TIpoQueja, tipoQueja } from 'src/app/componentes/Models/TIpoQueja';
import { TipoQuejaService } from 'src/app/service/tipoQueja.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-tipo',
  templateUrl: './modificar-tipo.component.html',
  styleUrls: ['./modificar-tipo.component.css']
})
export class ModificarTipoComponent implements OnInit {

  idTipoQueja: number;
  constructor(
    private service: TipoQuejaService,
    private dialogRef: MatDialogRef<ModificarTipoComponent>,
    private tokenService: TokenService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.idTipoQueja= data.idTipoQueja;
    console.log('El id del tipo queja es: ', this.idTipoQueja);
   }


   formularioModificarTipo = new FormGroup({
    siglasQueja: new FormControl(),
    descripcionQueja: new FormControl(),
    idEstado: new FormControl(),
   
  })

  ngOnInit() {
  }

  onCancelar(): void {
    this.dialogRef.close();
  }
  

  alertar(){
    Swal.fire({
      title: 'Está seguro de guardar los cambios realizados?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, guardar cambios',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.modificarTipo();
      }else{
        this.dialogRef.close();
      }
    });
  }


  

  modificarTipo(){
    let fecha = new Date();
    let desdeStr = `${fecha.getDate()}-${('0' + (fecha.getMonth() + 1)).slice(-2)}-${fecha.getFullYear()}`;


  
    
    if (this.formularioModificarTipo.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor complete los campos obligatorios.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }


    const modificarPuntos: tipoQueja={
      siglasQueja: this.formularioModificarTipo.get('siglasQueja')?.value,
      descripcionQueja: this.formularioModificarTipo.get('descripcionQueja')?.value,
      idEstado: this.formularioModificarTipo.get('idEstado')?.value ? 1 : 2,
      fechamodificacion: desdeStr,
      usuariomodifico: this.tokenService.getUserName(),

    }
    this.service.modificarTipoQueja(this.idTipoQueja,modificarPuntos).toPromise().then(PUNTO=>{
      Swal.fire({
        titleText: `Se ha Modificado el punto de atención con éxito.`,
        icon: 'success',
        showCloseButton: true,
        showConfirmButton: false
    })
  })


  }

}
