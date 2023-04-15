import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanDeactivate<AdminLogoutComponent> {
  canDeactivate(
    component: AdminLogoutComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return window.confirm("Are you sure you want to logout?");
  }
  
}
