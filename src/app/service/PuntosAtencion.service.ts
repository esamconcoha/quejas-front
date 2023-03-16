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

}
