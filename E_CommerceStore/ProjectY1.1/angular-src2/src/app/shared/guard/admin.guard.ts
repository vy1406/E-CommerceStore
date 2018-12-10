import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService) { }

    canActivate() {
        if (this.authService.isAdmin()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
