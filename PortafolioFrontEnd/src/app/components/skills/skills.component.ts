import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: any[] = [];
  skillsDuras: any[] = [];
  idiomas: any[] = [];


  constructor(private http: HttpClient, private UsuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/habblandas/lista').subscribe(
      (response) => {
        this.skills = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.http.get<any[]>('http://localhost:8080/habduras/lista').subscribe(
      (response) => {
        this.skillsDuras = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.http.get<any[]>('http://localhost:8080/idiomas/lista').subscribe(
      (response) => {
        this.idiomas = response;
      },
      (error) => {
        console.log(error);
      }
    );

  }
  API_URL_HB = "http://localhost:8080/habblandas/";
  API_URL_HD = "http://localhost:8080/habduras/";
  API_URL_IDIOMAS = "http://localhost:8080/idiomas/";

  estaLogueado(): boolean {
    return this.UsuarioService.estaLogueado();
  }

  editarHabilidadBlanda(HBId: number) {
    // Redirigir al usuario a la página de edición del proyecto
    this.router.navigate(['/editarHabilidadesBlandas', HBId]);
  }

  editarHabilidadDura(HDId: number) {
    // Redirigir al usuario a la página de edición del proyecto
    this.router.navigate(['/editarHabilidadesDuras', HDId]);
  }

  editarIdioma(idiomaId: number) {
    // Redirigir al usuario a la página de edición del proyecto
    this.router.navigate(['/editar-idioma', idiomaId]);
  }

  eliminarHD(HDId: number) {
    if (confirm('¿Seguro que desea eliminar el proyecto?')) {
      // Enviar una solicitud DELETE para eliminar el proyecto
      this.http.delete<any>(`${this.API_URL_HD}delete/${HDId}`).subscribe(
        () => {
          console.log('Proyecto eliminado exitosamente');
          // Actualizar la lista de proyectos
          this.obtenerHD();
        },
        (error) => {
          console.log('Error al eliminar la HD:', error);
        }
      );
    }
  }

    eliminarHB(HBId: number) {
      if (confirm('¿Seguro que desea eliminar el proyecto?')) {
        // Enviar una solicitud DELETE para eliminar el proyecto
        this.http.delete<any>(`${this.API_URL_HB}delete/${HBId}`).subscribe(
          () => {
            console.log('Proyecto eliminado exitosamente');
            // Actualizar la lista de proyectos
            this.obtenerHB();
          },
          (error) => {
            console.log('Error al eliminar la HB:', error);
          }
        );
      }
    }
      eliminarIdioma(idiomaId: number) {
        if (confirm('¿Seguro que desea eliminar el proyecto?')) {
          // Enviar una solicitud DELETE para eliminar el proyecto
          this.http.delete<any>(`${this.API_URL_IDIOMAS}delete/${idiomaId}`).subscribe(
            () => {
              console.log('Proyecto eliminado exitosamente');
              // Actualizar la lista de proyectos
              this.obtenerIdioma();
            },
            (error) => {
              console.log('Error al eliminar el Idioma:', error);
            }
          );
        }
      }

      obtenerHB(): void {
        this.http.get<any[]>(`${this.API_URL_HB}lista`).subscribe(
          (response) => {
            this.skills = response;
          },
          (error) => {
            console.log('Error al obtener la lista de Habilidades Blandas:', error);
          }
        );
      }

      obtenerHD(): void {
        this.http.get<any[]>(`${this.API_URL_HD}lista`).subscribe(
          (response) => {
            this.skillsDuras = response;
          },
          (error) => {
            console.log('Error al obtener la lista de Habilidades Duras:', error);
          }
        );
      }

      obtenerIdioma(): void {
        this.http.get<any[]>(`${this.API_URL_IDIOMAS}lista`).subscribe(
          (response) => {
            this.idiomas = response;
          },
          (error) => {
            console.log('Error al obtener la lista de Idiomas:', error);
          }
        );
      }
}
