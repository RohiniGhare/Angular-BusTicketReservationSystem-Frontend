import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from './admin-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private adminLogin:AdminServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("In guard : status : "+this.adminLogin.getLoggedInStatus());
      if(this.adminLogin.getLoggedInStatus()){
        return true;
      }
      else{
        return false;
      }
  }
  // canActivate() {
  //   if(this.adminLogin.loggedIn)
  //     return true;
  //   else
  //     return false;
  // }
  
}
