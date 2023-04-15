import { tablaUsuario, traerCargo, traerPunto } from './../componentes/Models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../componentes/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:8081/Mi-prestamito/api/Usuarios";
constructor(private httpClient: HttpClient) { }

registrarUsuario(usuariosinternos: Usuario): Observable<Usuario> {
  return this.httpClient.post<Usuario>(`${this.baseURL}/guardarUsuario`, usuariosinternos);
}

obtenerUsuarios(): Observable<Usuario[]> {
  return this.httpClient.get<Usuario[]>(`${this.baseURL}/all`);
}

tablaUsuario(): Observable<tablaUsuario[]>{
  return this.httpClient.get<tablaUsuario[]>(`${this.baseURL}/tablaUsuarios`);
}


puntos():Observable<traerPunto[]>{
  return this.httpClient.get<traerPunto[]>(`${this.baseURL}/traerPuntos`);
}

cargo():Observable<traerCargo[]>{
  return this.httpClient.get<traerCargo[]>(`${this.baseURL}/traerCargo`);
}


}
