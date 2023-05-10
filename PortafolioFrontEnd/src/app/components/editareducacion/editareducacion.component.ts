import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css']
})
export class EditareducacionComponent {
  educacion = {cursoEdu: '', fechaEdu: '', instiEdu: '', descrpEdu: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const educacionId = +this.route.snapshot.params['id'];
    this.http.get<any>(`https://portafoliobackend-xekr.onrender.com/educacion/detail/${educacionId}`).subscribe(
      (response) => {
        this.educacion = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    // Enviar una solicitud PUT con los nuevos valores
    const educacionId = +this.route.snapshot.params['id'];
    this.http.put<any>(`https://portafoliobackend-xekr.onrender.com/educacion/update/${educacionId}`, this.educacion).subscribe(
      () => {
        console.log('Educacion editada exitosamente');
        // Redirigir al usuario de vuelta a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al editar la educacion:', error);
      }
    );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }
}