import { Component, signal } from '@angular/core';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HT_1_AplicacionesWeb2026');
}
