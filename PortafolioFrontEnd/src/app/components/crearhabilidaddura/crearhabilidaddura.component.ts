import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crearhabilidaddura',
  templateUrl: './crearhabilidaddura.component.html',
  styleUrls: ['./crearhabilidaddura.component.css']
})
export class CrearhabilidadduraComponent {

  skillsDuras = {nombreHD: '', tituloHD: '', porcentajeHD: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit() {
    // Enviar una solicitud PUT con los nuevos valores
    const HDId = +this.route.snapshot.params['id'];
    this.http.post<any>(`https://portafoliobackend-xekr.onrender.com/habduras/create`, this.skillsDuras).subscribe(
      () => {
        console.log('Habilidad editada exitosamente');
        // Redirigir al usuario de vuelta a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al crear la Habilidad:', error);
      }
    );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }

  public isPorcentajeValido(): boolean {
    const porcentaje = parseInt(this.skillsDuras.porcentajeHD);
    return porcentaje >= 1 && porcentaje <= 100;
  }
}

