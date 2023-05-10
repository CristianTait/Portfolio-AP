import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  educacion: any[] = [];

  constructor(private router: Router, private http: HttpClient, private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/educacion/lista').subscribe(
      (response) => {
        this.educacion = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  API_URL = "http://localhost:8080/educacion/";

  editarEducacion(educacionId: number) {
    // Redirigir al usuario a la página de edición del proyecto
    this.router.navigate(['/editareducacion', educacionId]);
  }

  
  eliminarEducacion(educacionId: number) {
    if (confirm('¿Seguro que desea eliminar?')) {
      // Enviar una solicitud DELETE para eliminar el proyecto
      this.http.delete<any>(`${this.API_URL}delete/${educacionId}`).subscribe(
        () => {
          console.log('Eliminado exitosamente');
          // Actualizar la lista de proyectos
          this.obtenerEducacion();
        },
        (error) => {
          console.log('Error al eliminar:', error);
        }
      );
    }
}

obtenerEducacion(): void {
  this.http.get<any[]>(`${this.API_URL}lista`).subscribe(
    (response) => {
      this.educacion = response;
    },
    (error) => {
      console.log('Error al obtener la lista de Educacion:', error);
    }
  );
}   
    

  estaLogueado(): boolean {
    return this.UsuarioService.estaLogueado();
  }

}
