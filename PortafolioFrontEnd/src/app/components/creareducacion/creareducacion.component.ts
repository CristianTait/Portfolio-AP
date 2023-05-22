import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creareducacion',
  templateUrl: './creareducacion.component.html',
  styleUrls: ['./creareducacion.component.css']
})
export class CreareducacionComponent {

  educacion = {cursoEdu: '', fechaEdu: '', instiEdu: '', descrpEdu: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
   
  }

  onSubmit() {
    // Enviar una solicitud PUT con los nuevos valores
    const educacionId = +this.route.snapshot.params['id'];
    this.http.post<any>(`http://localhost:8080/educacion/create`, this.educacion).subscribe(
      () => {
        console.log('Educacion creada exitosamente');
        // Redirigir al usuario de vuelta a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al crear la educacion:', error);
      }
    );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }
}
