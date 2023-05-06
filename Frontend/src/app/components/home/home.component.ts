import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../service/usuario.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http: HttpClient, private router: Router, private UsuarioService: UsuarioService) { }
  personas!: any[];

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/personas/lista').subscribe(
      (response) => {
        this.personas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
