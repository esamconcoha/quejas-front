import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TipoQuejaService } from 'src/app/service/tipoQueja.service';
import { TokenService } from 'src/app/service/token.service';
import { AgregarPuntoComponent } from '../../puntos-atencion/agregar-punto/agregar-punto.component';
import Swal from 'sweetalert2';
import { tipoQueja } from 'src/app/componentes/Models/TIpoQueja';

@Component({
  selector: 'app-agregar-tipo',
  templateUrl: './agregar-tipo.component.html',
  styleUrls: ['./agregar-tipo.component.css']
})
export class AgregarTipoComponent implements OnInit {

  openModal: any;
  crearTpForm:FormGroup;

  constructor(
    private service: TipoQuejaService,
    private formBuilder:FormBuilder,
    private dialogRef: MatDialogRef<AgregarPuntoComponent>,
    private tokenService: TokenService
  ) { 

    this.crearTpForm= this.formBuilder.group({
      siglasQueja:[null, Validators.required],
      descripcionQueja:[null,Validators.required],
    })
  }

  ngOnInit() {
  }


  onCancelar(): void {
    this.dialogRef.close();
  }

  agregarTipo(){
    let fecha = new Date();
    let desdeStr = `${fecha.getDate()}-${('0' + (fecha.getMonth() + 1)).slice(-2)}-${fecha.getFullYear()}`;

    if (this.crearTpForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor complete los campos obligatorios.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }

    const nuevoTipo: tipoQueja={
      siglasQueja: this.crearTpForm.get('siglasQueja')?.value,
      descripcionQueja: this.crearTpForm.get('descripcionQueja')?.value,
      fechacreacion: desdeStr,
      fechamodificacion: desdeStr,
      usuariocreo: this.tokenService.getUserName(),
      usuariomodifico: this.tokenService.getUserName(),
      idEstado: 1,
    }
    this.service.guardarTipoQueja(nuevoTipo).toPromise().then(TIPO=>{
      Swal.fire({
        titleText: `Se ha almacenado la información con éxito.`,
        icon: 'success',
        showCloseButton: true,
        showConfirmButton: false
      }); return;
      
     } );


  }




}



