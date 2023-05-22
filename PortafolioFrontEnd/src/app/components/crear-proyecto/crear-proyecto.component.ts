import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent {

  proyecto = {tituloProy: '', descripProy: '', imagenProy: '', tecnoProy: '', fechaProy: '', urlProy: ''};

  constructor(private http: HttpClient, private router: Router) { 
    
  }

  

  API_URL = "http://localhost:8080/proyectos/";
  

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }

  onSubmit() {

    const urlRegex = new RegExp(
      "^(?:(?:https?|ftp)://)"
    );
    if (!urlRegex.test(this.proyecto.urlProy) || !urlRegex.test(this.proyecto.imagenProy)) {
      console.log('La URL ingresada no es válida');
      alert("URL INVALIDA");
      return;
    }
    
    // Enviar una solicitud POST al servidor para crear el proyecto
    this.http.post<any>(`${this.API_URL}create`, this.proyecto).subscribe(
      () => {
        console.log('Proyecto creado exitosamente');
        // Redirigir al usuario a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al crear el proyecto:', error);
      }
    );
  }

}
