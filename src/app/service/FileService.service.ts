import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  private baseURL = "http://localhost:8081/Mi-prestamito/api/files";
constructor(private httpClient: HttpClient) { }

uploadFile(file: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('files', file);
  return this.httpClient.post<any>(`${this.baseURL}/upload`, formData);
}


getFiles(): Observable<any> {
  return this.httpClient.get<any>(`${this.baseURL}/files`);
}
}
