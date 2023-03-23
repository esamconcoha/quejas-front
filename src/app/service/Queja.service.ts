import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Queja } from '../componentes/Models/Queja';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {
  private baseURL = "http://localhost:8081/Mi-prestamito/api/Queja";
constructor(private httpClient: HttpClient) { }



guardarQUeja(queja:Queja): Observable<Queja> {
  return this.httpClient.post<Queja>(`${this.baseURL}/guardar`, queja);
}


listarPorEstado(estado:number): Observable<Queja[]> {
  return this.httpClient.get<Queja[]>(`${this.baseURL}/`+`${estado}`);
}

listarQuejaPorPuntoAtencion(idPuntosAtencion:number): Observable<Queja[]> {
  return this.httpClient.get<Queja[]>(`${this.baseURL}/Quejas-por-PuntosAtencion/`+`${idPuntosAtencion}`);
}

}
