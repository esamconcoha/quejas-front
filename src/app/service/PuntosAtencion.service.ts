import { traerRegiones,  traerPuntosAtencion, contadorUsuarios } from './../componentes/Models/PuntosAtencion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PuntosAtencion } from '../componentes/Models/PuntosAtencion';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PuntosAtencionService {
  private baseURL = "http://localhost:8081/Mi-prestamito/api/PuntosAtencion";
constructor(private httpClient: HttpClient) { }

guardarPuntosAtencion(puntosAtencion:PuntosAtencion): Observable<PuntosAtencion> {
  return this.httpClient.post<PuntosAtencion>(`${this.baseURL}/guardar`, puntosAtencion);
}


private cacheRegiones!: traerRegiones[];

traerRegiones(): Observable<traerRegiones[]> {
  if(this.cacheRegiones){
    console.log("se obtuvo cache de regiones");
    return of(this.cacheRegiones);
  }

  const cacheTraerRegiones= localStorage.getItem('cacheRegiones');

  if(cacheTraerRegiones){
    this.cacheRegiones = JSON.parse(cacheTraerRegiones);
    console.log("se obtuvo de cache");
    return of(this.cacheRegiones);
  }

return this.httpClient.get<traerRegiones[]>(`${this.baseURL}/traerRegiones`).pipe(
  tap(data =>{
    console.log(data);
    this.cacheRegiones = data;
    localStorage.setItem('cacheRegiones', JSON.stringify(this.cacheRegiones));
  })
);

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
