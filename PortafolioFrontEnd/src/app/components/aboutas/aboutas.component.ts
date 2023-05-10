import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../service/usuario.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutas',
  templateUrl: './aboutas.component.html',
  styleUrls: ['./aboutas.component.css']
})
export class AboutasComponent{
  personas!: any[];

  constructor(private http: HttpClient, private router: Router, private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://portafoliobackend-xekr.onrender.com/personas/lista').subscribe(
      (response) => {
        this.personas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  API_URL = "https://portafoliobackend-xekr.onrender.com/personas/";

  editarPersona(personaId: number) {
    // Redirigir al usuario a la página de edición del proyecto
    this.router.navigate(['/editarpersona', personaId]);
  }

  
  eliminarPersona(personaId: number) {
    if (confirm('¿Seguro que desea eliminar la persona?')) {
      // Enviar una solicitud DELETE para eliminar el proyecto
      this.http.delete<any>(`${this.API_URL}delete/${personaId}`).subscribe(
        () => {
          console.log('Proyecto eliminado exitosamente');
          // Actualizar la lista de proyectos
          this.obtenerPersonas();
        },
        (error) => {
          console.log('Error al eliminar la persona:', error);
        }
      );
    }
}

obtenerPersonas(): void {
  this.http.get<any[]>(`${this.API_URL}lista`).subscribe(
    (response) => {
      this.personas = response;
    },
    (error) => {
      console.log('Error al obtener la lista de Personas:', error);
    }
  );
}

  estaLogueado(): boolean {
    return this.UsuarioService.estaLogueado();
  }

}






