import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuarioSesion, Usuario } from '../componentes/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private baseURL = "http://localhost:8081/Mi-prestamito/api/auth";
constructor(private httpClient: HttpClient) { }

iniciarSesion(sesion:usuarioSesion): Observable<String> {
  return this.httpClient.post<String>(`${this.baseURL}/authenticate`, sesion);
}


}
