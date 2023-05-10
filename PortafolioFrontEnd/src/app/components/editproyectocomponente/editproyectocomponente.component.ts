import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproyectocomponente',
  templateUrl: './editproyectocomponente.component.html',
  styleUrls: ['./editproyectocomponente.component.css']
})
export class EditproyectocomponenteComponent {
  proyecto = {tituloProy: '', descripProy: '', imagenProy: '', tecnoProy: '', fechaProy: '', urlProy: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Obtener el ID del proyecto desde la URL
    const proyectoId = +this.route.snapshot.params['id'];
    // Obtener los datos del proyecto con el ID especificado
    this.http.get<any>(`https://portafoliobackend-xekr.onrender.com/proyectos/detail/${proyectoId}`).subscribe(
      (response) => {
        this.proyecto = response;
      },
      (error) => {
        console.log(error);
      }
    );
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

    // Enviar una solicitud PUT con los nuevos valores
    const proyectoId = +this.route.snapshot.params['id'];
    this.http.put<any>(`https://portafoliobackend-xekr.onrender.com/proyectos/update/${proyectoId}`, this.proyecto).subscribe(
      () => {
        console.log('Proyecto editado exitosamente');
        // Redirigir al usuario de vuelta a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al editar el proyecto:', error);
      }
    );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }

  
}