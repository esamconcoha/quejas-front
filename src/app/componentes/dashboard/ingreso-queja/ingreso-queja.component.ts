import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuejaService } from 'src/app/service/Queja.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
import { MedioIngresoQueja } from '../../Models/MedioIngresoQueja';
import { PuntosAtencionList } from '../../Models/PuntosAtencion';
import { Queja } from '../../Models/Queja';
import { TipoQuejaList } from '../../Models/TIpoQueja';
interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}
@Component({
  selector: 'app-ingreso-queja',
  templateUrl: './ingreso-queja.component.html',
  styleUrls: ['./ingreso-queja.component.css']
})
export class IngresoQuejaComponent implements OnInit {
  isSideNavCollapsed=false;
  screenWidth: number = 0;
  listaMedioIngreso: MedioIngresoQueja[] = [];
  listaPuntosAtencion: PuntosAtencionList[] = [];
  listaTipoQueja: TipoQuejaList[] = [];
  formularioCreacionQueja: FormGroup= this.formBuilder.group({
    medioIngresoQueja: ['', [Validators.required]],
    nombreCuenta: ['', [Validators.required]],
    correoElectronico: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    puntoAtencion: ['', [Validators.required]],
    tipoQueja: ['', [Validators.required]],
    detalleQueja: ['', [Validators.required]],
  })

  constructor(
    private router: Router,
    private formBuilder:FormBuilder,
     private quejaServicio: QuejaService,
     private tokenService: TokenService) { }

  ngOnInit() {
    this.listarMedioIngresoQueja();
    this.listarPuntosAtencion();
    this.listarTipoQueja();
  }


  crearQueja(){
    const queja: Queja = {
      idMedioIngresoQueja: this.medioIngresoQuejaField?.value,
      idPuntoAtencion: this.puntoAtencionField?.value,
      detalleQueja: this.detalleQuejaField?.value,
      usuariocreo: this.tokenService.getUserName(),
      idTipoQueja:  this.tipoQuejaField?.value,
      nombre: this.nombreCuentaField?.value,
      correo: this.correoElectronicoField?.value,
      telefono: this.telefonoField?.value,
    }
    Swal.fire({
      title: '¿Estas seguro?',
      icon: 'warning',
      text: '¿Está seguro de continuar?',
      showCancelButton: true,
      confirmButtonText: 'Si , estoy seguro',
      cancelButtonText: 'No, cancelar',
      
    }).then((result) => {
      console.log(queja);
     if (result.isConfirmed) {
      this.guardarQueja(queja);
      }
    })
  
  }


  guardarQueja(queja?: Queja) {
      this.quejaServicio.guardarQUeja(queja!).subscribe(dato => {
        console.log(dato);
        Swal.fire('Exito', `La queja fue Ingresada exitosamente`, `success`)
      },error => Swal.fire('ERROR', `Hubo problemas al crear la Queja, por favor intente de nuevo`, `error`))
  }

  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  //este metodo es para el body de la pagina que se ajuste al tamaño de la pantalla 
  getBodyClass(): string {
    let styleclass = '';
    if (this.isSideNavCollapsed && this.screenWidth > 768) {
      styleclass = 'body-trimmed';
    } else if (this.isSideNavCollapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleclass = 'body-md-screen';
    }
    return styleclass;
  }

  listarMedioIngresoQueja(){
    this.quejaServicio.listarCatalogoMedioIngreso().subscribe(dato =>{
      console.log(dato);
      this.listaMedioIngreso = dato;

    }
    )
  }

  validarFormulario(){

    if(this.formularioCreacionQueja.valid){
        this.crearQueja();
    }else{
      this.formularioCreacionQueja.markAllAsTouched();
    }

  }


  listarPuntosAtencion(){
    this.quejaServicio.listarCatalogoPuntosAtencion().subscribe(dato =>{
      this.listaPuntosAtencion = dato;
      console.log(dato);
    }
    )
  }

  listarTipoQueja(){
    this.quejaServicio.listarCatalogoTipoQueja().subscribe(dato =>{
      this.listaTipoQueja = dato;
      console.log(dato);
    }
    )
  }


  get medioIngresoQuejaField(){
    return this.formularioCreacionQueja.get('medioIngresoQueja');
  }

  get nombreCuentaField(){
    return this.formularioCreacionQueja.get('nombreCuenta');
  }

  get correoElectronicoField(){
    return this.formularioCreacionQueja.get('correoElectronico');
  } 

  get telefonoField(){
    return this.formularioCreacionQueja.get('telefono');
  }

  get puntoAtencionField(){
    return this.formularioCreacionQueja.get('puntoAtencion');
  } 

  get tipoQuejaField(){
    return this.formularioCreacionQueja.get('tipoQueja');
  }

  get detalleQuejaField(){
    return this.formularioCreacionQueja.get('detalleQueja');
  }



}
