import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddBusComponent } from './add-bus/add-bus.component';

@Injectable({
  providedIn: 'root'
})
export class AdminDeActivateGuard implements CanDeactivate<AddBusComponent> {
  canDeactivate(
    component: AddBusComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return window.confirm("Are you sure you want to leave the page?");
  }

  // canDeactivate(component: AddBusComponent){
  //   if(component.cancelForm)
  //   {
  //     return window.confirm("Are you sure you want to leave the page?");
  //   }
  //   return true;
  // }
  
}
