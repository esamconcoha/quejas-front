import { Component, OnInit } from '@angular/core';
import { QuejaService } from 'src/app/service/Queja.service';
import { Queja, tableQueja } from '../../Models/Queja';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}
@Component({
  selector: 'app-reporte-administrativo',
  templateUrl: './reporte-administrativo.component.html',
  styleUrls: ['./reporte-administrativo.component.css']
})
export class ReporteAdministrativoComponent implements OnInit {
  isSideNavCollapsed=false;
  screenWidth: number = 0;
  public elementosPorPagina = 5;
  public paginaActual = 1;

  listaQuejas: tableQueja[] = [];
  constructor(
    private quejaServicio:QuejaService
    ) { }

  ngOnInit() {
    this.traerQuejas();
  }
  
  //Metodos para la paginacion
  public obtenerElementosPorPagina(): any[] {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    return this.listaQuejas.slice(inicio, fin);
  }

  //Metodos para la paginacion
  public retrocederPagina(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }
  
  //Metodos para la paginacion
  public avanzarPagina(): void {
    if (this.paginaActual < this.numeroDePaginas()) {
      this.paginaActual++;
    }
  }
  //Metodos para la paginacion
  
  public numeroDePaginas(): number {
    return Math.ceil(this.listaQuejas.length / this.elementosPorPagina);
  }

  //metodo del body para el dashboard
  getBodyClass(): string {
    let styleclass = '';
    if (this.isSideNavCollapsed && this.screenWidth > 768) {
      styleclass = 'body-trimmed';
    } else if (this.isSideNavCollapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleclass = 'body-md-screen';
    }
    return styleclass;
  }


  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  //Metodo para traer las quejas
  traerQuejas(){
    this.quejaServicio.listarQuejaPorPuntoAtencion(1).subscribe(dato =>{
      this.listaQuejas = dato;
    })
  }
//Metodo para descargar el pdf
  Imprimirpdf() {
    var doc = new jsPDF();
    autoTable(doc,{html:"table"});
    doc.save("quejas.pdf")
   }
   fileName= 'quejas.xlsx';
   exportexcel(): void
   {
     /* pass here the table id */
     let element = document.getElementById('table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  
     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
     /* save to file */  
     XLSX.writeFile(wb, this.fileName);
  
   }
   

}
