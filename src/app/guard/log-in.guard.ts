import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogInService } from '../services/log-in.service';

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate {

  constructor(private auth: LogInService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      alert('You are not logged in');
      this.router.navigate(['/login']);
      return false;
    }
  }

}
