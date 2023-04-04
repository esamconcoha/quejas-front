import { traerRegiones,  traerPuntosAtencion, contadorUsuarios } from './../componentes/Models/PuntosAtencion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PuntosAtencion } from '../componentes/Models/PuntosAtencion';

@Injectable({
  providedIn: 'root'
})
export class PuntosAtencionService {
  private baseURL = "http://localhost:8081/Mi-prestamito/api/PuntosAtencion";
constructor(private httpClient: HttpClient) { }

guardarPuntosAtencion(puntosAtencion:PuntosAtencion): Observable<PuntosAtencion> {
  return this.httpClient.post<PuntosAtencion>(`${this.baseURL}/guardar`, puntosAtencion);
}

traerRegiones(): Observable<traerRegiones[]> {
return this.httpClient.get<traerRegiones[]>(`${this.baseURL}/traerRegiones`);
}

traerPuntos(idRegion:Number):Observable<traerPuntosAtencion[]>{
  return this.httpClient.get<traerPuntosAtencion[]>(`${this.baseURL}/traerTabla/${idRegion}`);
}

modificarPunto(idPuntoAtencion: number, puntoModificado:PuntosAtencion):Observable<PuntosAtencion>{
  return this.httpClient.put<PuntosAtencion>(`${this.baseURL}/modificarpunto/${idPuntoAtencion}`, puntoModificado);
}

contadorUsuarios(idPuntoAtencion: number):Observable<contadorUsuarios>{
  return this.httpClient.get<contadorUsuarios>(`${this.baseURL}/contadorUsuarios/${idPuntoAtencion}`);
}


}
