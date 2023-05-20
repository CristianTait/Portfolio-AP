import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crearidioma',
  templateUrl: './crearidioma.component.html',
  styleUrls: ['./crearidioma.component.css']
})
export class CrearidiomaComponent {

  idiomas = {nombreI: '', descripI: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
   
  }

  onSubmit() {
    // Enviar una solicitud PUT con los nuevos valores
    const idiomaId = +this.route.snapshot.params['id'];
    this.http.post<any>(`https://portafoliobackend-xekr.onrender.com/idiomas/create`, this.idiomas).subscribe(
      () => {
        console.log('Idioma creado exitosamente');
        // Redirigir al usuario de vuelta a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al crear el Idioma:', error);
      }
    );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }
}

