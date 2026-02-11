import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-success',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success {
  private router = inject(Router);

  logout() {
    this.router.navigate(['/login']);
  }
}
