import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { CanActivate } from '@angular/router';
import { AuthLoginService } from '../services/auth-login.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authloginService: AuthLoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/'])
    }
    return true;
  }

}
