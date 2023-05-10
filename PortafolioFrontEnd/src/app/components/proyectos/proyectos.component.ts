import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../service/usuario.service'
import { EditproyectocomponenteComponent } from '../editproyectocomponente/editproyectocomponente.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  isAdmin = false;
 
  proyectos: any[] = [];


constructor(private http: HttpClient, private router: Router, private UsuarioService: UsuarioService) { }


  ngOnInit(): void {
    // Obtener proyectos
    this.http.get<any[]>('http://localhost:8080/proyectos/lista').subscribe(
      (response) => {
        this.proyectos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  API_URL = "http://localhost:8080/proyectos/";

  editarProyecto(proyectoId: number) {
    // Redirigir al usuario a la página de edición del proyecto
    this.router.navigate(['/editproyectocomponente', proyectoId]);
  }

  
  eliminarProyecto(proyectoId: number) {
    if (confirm('¿Seguro que desea eliminar el proyecto?')) {
      // Enviar una solicitud DELETE para eliminar el proyecto
      this.http.delete<any>(`${this.API_URL}delete/${proyectoId}`).subscribe(
        () => {
          console.log('Proyecto eliminado exitosamente');
          // Actualizar la lista de proyectos
          this.obtenerProyectos();
        },
        (error) => {
          console.log('Error al eliminar el proyecto:', error);
        }
      );
    }
}

obtenerProyectos(): void {
  this.http.get<any[]>(`${this.API_URL}lista`).subscribe(
    (response) => {
      this.proyectos = response;
    },
    (error) => {
      console.log('Error al obtener la lista de proyectos:', error);
    }
  );
}
  

crearProyecto() {
  // Redirigir al usuario a la página de edición del proyecto
  this.router.navigate(['/crearproyecto']);
}
    
    
    

  estaLogueado(): boolean {
    return this.UsuarioService.estaLogueado();
  }

}