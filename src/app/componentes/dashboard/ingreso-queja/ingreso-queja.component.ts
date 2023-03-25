import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuejaService } from 'src/app/service/Queja.service';
import { MedioIngresoQueja } from '../../Models/MedioIngresoQueja';
import { PuntosAtencionList } from '../../Models/PuntosAtencion';
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
    correoElectronico: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    puntoAtencion: ['', [Validators.required]],
    tipoQueja: ['', [Validators.required]],
    detalleQueja: ['', [Validators.required]],
  })

  constructor(private router: Router,private formBuilder:FormBuilder, private quejaServicio: QuejaService) { }

  ngOnInit() {
    this.listarMedioIngresoQueja();
    this.listarPuntosAtencion();
    this.listarTipoQueja();
  }




  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

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


}
