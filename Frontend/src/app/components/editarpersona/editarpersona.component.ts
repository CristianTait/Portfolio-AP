import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarpersona',
  templateUrl: './editarpersona.component.html',
  styleUrls: ['./editarpersona.component.css']
})
export class EditarpersonaComponent {

  personas = {nombre: '', apellido: '', descripcion: '', img:'', logo:'', ubicacion: '', mail:'', linkedin:'', github:''};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Obtener el ID del proyecto desde la URL
    const personaID = +this.route.snapshot.params['id'];
    // Obtener los datos del proyecto con el ID especificado
    this.http.get<any>(`http://localhost:8080/personas/detail/${personaID }`).subscribe(
      (response) => {
        this.personas = response;
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
    if (!urlRegex.test(this.personas.img) || !urlRegex.test(this.personas.logo) || !urlRegex.test(this.personas.linkedin) || !urlRegex.test(this.personas.github)) {
      console.log('La URL ingresada no es válida');
      alert("URL INVALIDA");
      return;
    }

    // Enviar una solicitud PUT con los nuevos valores
    const personaID = +this.route.snapshot.params['id'];
    this.http.put<any>(`http://localhost:8080/personas/update/${personaID}`, this.personas).subscribe(
      () => {
        console.log('Persona editado exitosamente');
        // Redirigir al usuario de vuelta a la lista de proyectos
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al editar persona:', error);
      }
    );
  }

  cancelar() {
    // Redirigir al usuario de vuelta a la lista de proyectos
    this.router.navigate(['/']);
  }

  
}