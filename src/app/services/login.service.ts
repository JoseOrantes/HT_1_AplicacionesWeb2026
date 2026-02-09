import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from '../interfaces/loginDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(data: Login): Observable<boolean> {
    console.log('Simulando login con:', data);
    // Aquí normalmente iría tu petición HTTP
    return of(true); // Simula que siempre es exitoso
  }
}
