import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fichaQueja } from 'src/app/componentes/Models/Queja';
import { QuejaService } from 'src/app/service/Queja.service';

@Component({
  selector: 'app-asignar-queja',
  templateUrl: './asignar-queja.component.html',
  styleUrls: ['./asignar-queja.component.css']
})
export class AsignarQuejaComponent implements OnInit {
  idQueja:number=0;
  fichaQueja?: fichaQueja;


  
  constructor(
    private service: QuejaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.idQueja= data.idQueja;
    console.log(this.idQueja);
  }

  ngOnInit() {
    this.traerDatosFicha();
  }

  traerDatosFicha(){
    this.service.fichaQueja(this.idQueja).subscribe(ficha=>{
      this.fichaQueja=ficha;
      console.log(this.fichaQueja);
    })
  }




}
