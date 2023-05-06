import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencias: any[] = [];

  constructor(private router: Router, private http: HttpClient, private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/explab/lista').subscribe(
      (response) => {
        this.experiencias = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  API_URL = "http://localhost:8080/explab/";

  editarExperiencia(experienciaId: number) {
    // Redirigir al usuario a la página de edición del proyecto
    this.router.navigate(['/editarexperiencia', experienciaId]);
  }

  
  eliminarExperiencia(experienciaId: number) {
    if (confirm('¿Seguro que desea eliminar?')) {
      // Enviar una solicitud DELETE para eliminar el proyecto
      this.http.delete<any>(`${this.API_URL}delete/${experienciaId}`).subscribe(
        () => {
          console.log('Eliminado exitosamente');
          // Actualizar la lista de proyectos
          this.obtenerExperiencia();
        },
        (error) => {
          console.log('Error al eliminar:', error);
        }
      );
    }
}

obtenerExperiencia(): void {
  this.http.get<any[]>(`${this.API_URL}lista`).subscribe(
    (response) => {
      this.experiencias = response;
    },
    (error) => {
      console.log('Error al obtener la lista de Experiencia:', error);
    }
  );
}   
    

  estaLogueado(): boolean {
    return this.UsuarioService.estaLogueado();
  }

}
