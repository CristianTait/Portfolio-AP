import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URL = 'http://localhost:8080/auth'; 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }

  login(nombreUsuario: string, password: string) {
    return this.http.post<any>(`${this.API_URL}/login`, { nombreUsuario: nombreUsuario, password: password })
      .pipe(
        tap(response => {
          const token = response.token;
          localStorage.setItem('token', token);
          console.log('Token almacenado en localStorage:', token);
        })
      );
  }

  getUsuarioActual(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any>(`${this.API_URL}/verificar-token`, { headers });
  }

  estaLogueado(): boolean {
    return localStorage.getItem('token') !== null;
  }
}