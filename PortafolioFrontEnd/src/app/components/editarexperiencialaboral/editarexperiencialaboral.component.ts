import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarexperiencialaboral',
  templateUrl: './editarexperiencialaboral.component.html',
  styleUrls: ['./editarexperiencialaboral.component.css']
})
export class EditarexperiencialaboralComponent {

  experiencias = {tituloE: '', fechaE: '', nombreE: '', descripcionE: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const expLabId = +this.route.snapshot.params['id'];
    this.http.get<any>(`https://portafoliobackend-xekr.onrender.com/explab/detail/${expLabId}`).subscribe(
      (response) => {
        this.experiencias = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    // Enviar una solicitud PUT con los nuevos valores
    const expLabId = +this.route.snapshot.params['id'];
    this.http.put<any>(`https://portafoliobackend-xekr.onrender.com/explab/update/${expLabId}`, this.experiencias).subscribe(
      () => {
        console.log('Experiencia editada exitosamente');
        // Redirigir al usuario de vuelta a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al editar la experiencia:', error);
      }
    );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }
}