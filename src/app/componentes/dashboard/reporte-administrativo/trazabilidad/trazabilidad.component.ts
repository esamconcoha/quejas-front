import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { trazabilidadTable } from 'src/app/componentes/Models/Trazabilidad';
import { QuejaService } from 'src/app/service/Queja.service';

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.component.html',
  styleUrls: ['./trazabilidad.component.css']
})
export class TrazabilidadComponent implements OnInit {
  presentadaSelected: boolean = true;
  asignadaSelected: boolean = false;
  analisisSelected: boolean = false;
  procedenteSelected: boolean = false;
  seguimientoSelected: boolean = false;
  finalizadaSelected: boolean = false;
  correlativo: string = '';
  constructor(
    private quejaServicio: QuejaService,
  ) { }
  trazablidad: trazabilidadTable[] = [];
  ngOnInit() {
    console.log(this.correlativo);
    this.obtenerTrazabilidad();
  }


  obtenerTrazabilidad(){
    this.quejaServicio.getTrazabiliad(this.correlativo).subscribe(dato =>{
      this.trazablidad = dato;
      console.log(dato);
    } )
  }

  
}
