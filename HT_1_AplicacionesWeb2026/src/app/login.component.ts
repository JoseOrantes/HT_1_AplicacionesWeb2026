import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { Login } from 'src/app/interfaces/loginDto';
//import { LoginService } from 'src/app/services/login/login.service';
import { Login } from './loginDto';
import { LoginService } from './login.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent {
  
  private loginService = inject(LoginService);

  username: string = '';
  password: string = '';

  login() {
    console.log('Usuario:', this.username);
    console.log('Password:', this.password);

    if (this.username !== '' && this.password !== '') {
      const objectRequest: Login = {
        username: this.username,
        password: this.password 
      };

      this.loginService.doLogin(objectRequest).subscribe(entry => {
        if (entry) {
          console.log("login exitoso");
        }
      });
    }

  }
}
