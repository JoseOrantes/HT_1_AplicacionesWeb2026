import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from './interfaces/loginDto';
import { LoginService } from './services/login.service';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  private loginService = inject(LoginService);

  username: string = '';
  password: string = '';

  login() {
    console.log('Usuario:', this.username);
    console.log('Password:', this.password);

    if (this.username && this.password) {
      const objectRequest: Login = {
        username: this.username,
        password: this.password
      };

      this.loginService.doLogin(objectRequest).subscribe(entry => {
        if (entry) {
          console.log('Login exitoso');
        }
      });
    }
  }
}
