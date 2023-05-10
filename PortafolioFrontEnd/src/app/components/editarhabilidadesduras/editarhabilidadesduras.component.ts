import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editarhabilidadesduras',
  templateUrl: './editarhabilidadesduras.component.html',
  styleUrls: ['./editarhabilidadesduras.component.css']
})
export class EditarhabilidadesdurasComponent {

  skillsDuras = {nombreHD: '', tituloHD: '', porcentajeHD: ''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Obtener el ID del proyecto desde la URL
    const HDId = +this.route.snapshot.params['id'];
    // Obtener los datos del proyecto con el ID especificado
    this.http.get<any>(`https://portafoliobackend-xekr.onrender.com/habduras/detail/${HDId}`).subscribe(
      (response) => {
        this.skillsDuras = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    // Enviar una solicitud PUT con los nuevos valores
    const HDId = +this.route.snapshot.params['id'];
    this.http.put<any>(`https://portafoliobackend-xekr.onrender.com/habduras/update/${HDId}`, this.skillsDuras).subscribe(
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

