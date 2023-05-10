import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {

  personas!: any[];
  estaLogueado = false;

  constructor(private http: HttpClient, private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/personas/lista').subscribe(
      (response) => {
        this.personas = response;
      },
      (error) => {
        console.log(error);
      }
    );
    this.verificarLogin();
  }

  login() {
    this.UsuarioService.login('usuario', 'password').subscribe(
      (response) => {
        this.estaLogueado = true;
        console.log('Login exitoso:', response);
      },
      (error) => {
        console.log('Error al hacer login:', error);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.estaLogueado = false;
    this.router.navigate(['/']);
  }

  verificarLogin() {
    if (localStorage.getItem('token')) {
      this.estaLogueado = true;
    }
  }

}