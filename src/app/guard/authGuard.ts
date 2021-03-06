import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    userEmail:string;
    constructor(private router: Router,private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // this.loginService.getUserEmail().subscribe(val =>{ this.userEmail=val; })
        
        if (localStorage.getItem('resetToken')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}






