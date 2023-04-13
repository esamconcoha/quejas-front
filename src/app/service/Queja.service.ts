import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MedioIngresoQueja } from '../componentes/Models/MedioIngresoQueja';
import { PuntosAtencionList } from '../componentes/Models/PuntosAtencion';
import { Queja, Correlativo, tableQueja } from '../componentes/Models/Queja';
import { TipoQuejaList } from '../componentes/Models/TIpoQueja';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuejaService {
  private baseURL = "http://localhost:8081/Mi-prestamito/api/Queja";
constructor(private httpClient: HttpClient) { }



guardarQUeja(queja:Queja): Observable<Queja> {
  return this.httpClient.post<Queja>(`${this.baseURL}/guardar`, queja);
}

listarQuejaId(id: number): Observable<Queja> {
  return this.httpClient.get<Queja>(`${this.baseURL}/correlativo` + `/${id}`);
}

listarPorEstado(estado:number): Observable<Queja[]> {
  return this.httpClient.get<Queja[]>(`${this.baseURL}/`+`${estado}`);
}

getCorrelativo(idQueja: number): Observable<Correlativo> {
  return this.httpClient.get<Correlativo>(`${this.baseURL}/correlativo/`+`${idQueja}`);
}

listarQuejaPorPuntoAtencion(idPuntosAtencion:number): Observable<tableQueja[]> {
  return this.httpClient.get<tableQueja[]>(`${this.baseURL}/QuejaporPuntosAtencion/`+`${idPuntosAtencion}`);
}
private cacheMedioIngreso!: MedioIngresoQueja[];

listarCatalogoMedioIngreso(): Observable<MedioIngresoQueja[]> {
  if (this.cacheMedioIngreso) {
    console.log("se obtuvo de cache 1d");
    return of(this.cacheMedioIngreso);
    
  }
  const cachedDataRazon = localStorage.getItem('cacheMedioIngreso');
  if (cachedDataRazon) {
    this.cacheMedioIngreso = JSON.parse(cachedDataRazon);
    console.log("se obtuvo de cache");
    return of(this.cacheMedioIngreso);
  
  }
  return this.httpClient.get<MedioIngresoQueja[]>(`${this.baseURL}/medio-ingreso`).pipe(
    tap(data => {
      console.log(data);
      this.cacheMedioIngreso = data;
      localStorage.setItem('cacheMedioIngreso', JSON.stringify(data));
    })
  );



}

private cachePuntosAtencion!: PuntosAtencionList[];


listarCatalogoPuntosAtencion(): Observable<PuntosAtencionList[]> {
  if (this.cachePuntosAtencion) {
    console.log("se obtuvo de cache 1d");
    return of(this.cachePuntosAtencion);
    
  }
  const cachedDataRazon = localStorage.getItem('cachePuntosAtencion');
  if (cachedDataRazon) {
    this.cachePuntosAtencion = JSON.parse(cachedDataRazon);
    console.log("se obtuvo de cache");
    return of(this.cachePuntosAtencion);
  
  }
  return this.httpClient.get<PuntosAtencionList[]>(`${this.baseURL}/puntos-atencion`).pipe(
    tap(data => {
      console.log(data);
      this.cachePuntosAtencion = data;
      localStorage.setItem('cachePuntosAtencion', JSON.stringify(data));
    })
  );


}

listarCatalogoTipoQueja(): Observable<TipoQuejaList[]> {
  return this.httpClient.get<TipoQuejaList[]>(`${this.baseURL}/tipo-queja`);
}
  
  
}

