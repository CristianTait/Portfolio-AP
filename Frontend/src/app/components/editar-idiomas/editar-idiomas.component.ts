import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-editar-idiomas',
  templateUrl: './editar-idiomas.component.html',
  styleUrls: ['./editar-idiomas.component.css']
})
export class EditarIdiomasComponent {

  idiomas = {nombreI: '', descripI: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Obtener el ID del proyecto desde la URL
    const idiomaId = +this.route.snapshot.params['id'];
    // Obtener los datos del proyecto con el ID especificado
    this.http.get<any>(`http://localhost:8080/idiomas/detail/${idiomaId}`).subscribe(
      (response) => {
        this.idiomas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    // Enviar una solicitud PUT con los nuevos valores
    const idiomaId = +this.route.snapshot.params['id'];
    this.http.put<any>(`http://localhost:8080/idiomas/update/${idiomaId}`, this.idiomas).subscribe(
      () => {
        console.log('Idioma editado exitosamente');
        // Redirigir al usuario de vuelta a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al editar el Idioma:', error);
      }
    );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }
}
