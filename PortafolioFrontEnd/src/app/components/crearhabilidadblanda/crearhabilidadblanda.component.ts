import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearhabilidadblanda',
  templateUrl: './crearhabilidadblanda.component.html',
  styleUrls: ['./crearhabilidadblanda.component.css']
})
export class CrearhabilidadblandaComponent {

  skills = {nombreHB: '', descripHB: '', porcentajeHB: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {

    
  }

  onSubmit() {
    // Enviar una solicitud PUT con los nuevos valores
    const HBId = +this.route.snapshot.params['id'];
    this.http.post<any>(`https://portafoliobackend-xekr.onrender.com/habblandas/create`, this.skills).subscribe(
      () => {
        console.log('Habilidad creada exitosamente');
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
    const porcentaje = parseInt(this.skills.porcentajeHB);
    return porcentaje >= 1 && porcentaje <= 100;
  }

}

