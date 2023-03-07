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




}
