import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: Auth) {}

  async login() {
    try {
      await signInWithEmailAndPassword(this.auth, this.email, this.password);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      alert('Error al iniciar sesión: ' + error);
    }
  }
}