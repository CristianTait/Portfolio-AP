import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarhabilidadesblandas',
  templateUrl: './editarhabilidadesblandas.component.html',
  styleUrls: ['./editarhabilidadesblandas.component.css']
})
export class EditarhabilidadesblandasComponent {

  skills = {nombreHB: '', descripHB: '', porcentajeHB: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Obtener el ID del proyecto desde la URL
    const HBId = +this.route.snapshot.params['id'];
    // Obtener los datos del proyecto con el ID especificado
    this.http.get<any>(`https://portafoliobackend-xekr.onrender.com/habblandas/detail/${HBId}`).subscribe(
      (response) => {
        this.skills = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    // Enviar una solicitud PUT con los nuevos valores
    const HBId = +this.route.snapshot.params['id'];
    this.http.put<any>(`https://portafoliobackend-xekr.onrender.com/habblandas/update/${HBId}`, this.skills).subscribe(
      () => {
        console.log('Habilidad editada exitosamente');
        // Redirigir al usuario de vuelta a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al editar la Habilidad:', error);
      }
    );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }
}
