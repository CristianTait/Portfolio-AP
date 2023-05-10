import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombreUsuario = '';
  password = '';
  errorMessage = '';

  constructor(private UsuarioService: UsuarioService, private router:Router) { }

  login() {
    if (!this.nombreUsuario || !this.password) {
      this.errorMessage = 'Por favor, introduce tu correo electrónico y contraseña';
      return;
    }
    this.UsuarioService.login(this.nombreUsuario, this.password)
      .subscribe(result => {
        console.log('login success');
        this.router.navigate(['/']);
      }, error => {
        console.log('login error');
        this.errorMessage = 'Error al iniciar sesión. Por favor, comprueba tu correo electrónico y contraseña';
      });
  }
}