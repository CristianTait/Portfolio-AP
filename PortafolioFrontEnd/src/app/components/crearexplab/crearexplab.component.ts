import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearexplab',
  templateUrl: './crearexplab.component.html',
  styleUrls: ['./crearexplab.component.css']
})
export class CrearexplabComponent {

  experiencias = {tituloE: '', fechaE: '', nombreE: '', descripcionE: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    
  }

  API_URL = "http://localhost:8080/explab/";

  onSubmit() {
   
   // Enviar una solicitud POST al servidor para crear el proyecto
   this.http.post<any>(`${this.API_URL}create`, this.experiencias).subscribe(
    () => {
      console.log('Experiencia creada exitosamente');
      
      this.router.navigate(['/']);
    },
    (error) => {
      console.log('Error al crear la experiencia:', error);
    }
  );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }
}
