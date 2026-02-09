import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { Login } from 'src/app/interfaces/loginDto';
//import { LoginService } from 'src/app/services/login/login.service';
import { Login } from './loginDto';
import { LoginService } from './login.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule,MatProgressSpinnerModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  
  private loginService = inject(LoginService);
  private router = inject(Router);

  username: string = '';
  password: string = '';
  isLoading: boolean = false;

  login() {
    this.isLoading = true;
    setTimeout(() => {
    if (this.username === 'admin@email.com' && this.password === '1234') {
      console.log("login exitoso");
      window.location.href = '/success.html';
      console.log("login exitoso");
      return;
    }else{

    console.log("login fallido");
    this.isLoading = false;}
    }, 1500);
   
  }


  //login() {
    //console.log('Usuario:', this.username);
    //console.log('Password:', this.password);

    //if (this.username !== '' && this.password !== '') {
      //const objectRequest: Login = {
        //username: this.username,
        //password: this.password 
      //};

      //this.loginService.doLogin(objectRequest).subscribe(entry => {
        //if (entry) {
          //console.log("login exitoso");
        //}
      //});
    //}

  //}
}
