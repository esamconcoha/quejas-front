import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedioIngresoQueja } from '../componentes/Models/MedioIngresoQueja';
import { PuntosAtencionList } from '../componentes/Models/PuntosAtencion';
import { Queja, tableQueja } from '../componentes/Models/Queja';
import { TipoQuejaList } from '../componentes/Models/TIpoQueja';

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

listarQuejaPorPuntoAtencion(idPuntosAtencion:number): Observable<tableQueja[]> {
  return this.httpClient.get<tableQueja[]>(`${this.baseURL}/QuejaporPuntosAtencion/`+`${idPuntosAtencion}`);
}

listarCatalogoMedioIngreso(): Observable<MedioIngresoQueja[]> {
  return this.httpClient.get<MedioIngresoQueja[]>(`${this.baseURL}/medio-ingreso`);
}


listarCatalogoPuntosAtencion(): Observable<PuntosAtencionList[]> {
  return this.httpClient.get<PuntosAtencionList[]>(`${this.baseURL}/puntos-atencion`);
}

listarCatalogoTipoQueja(): Observable<TipoQuejaList[]> {
  return this.httpClient.get<TipoQuejaList[]>(`${this.baseURL}/tipo-queja`);
}
  
  
}
