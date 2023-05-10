import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent {

  constructor(private http: HttpClient, private router: Router) { 
    
  }

  proyecto = {};

  API_URL = "https://portafoliobackend-xekr.onrender.com/proyectos/";
  

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }

  onSubmit() {
    // Enviar una solicitud POST al servidor para crear el proyecto
    this.http.post<any>(`${this.API_URL}create`, this.proyecto).subscribe(
      () => {
        console.log('Proyecto creado exitosamente');
        // Redirigir al usuario a la lista de proyectos
        this.router.navigate(['/proyectos']);
      },
      (error) => {
        console.log('Error al crear el proyecto:', error);
      }
    );
  }

}
