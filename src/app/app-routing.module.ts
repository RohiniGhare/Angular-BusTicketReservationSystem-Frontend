import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AdminDeActivateGuard } from './admin-de-activate.guard';
import { AdminForgotPasswordComponent } from './admin-forgot-password/admin-forgot-password.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { LogoutGuard } from './logout.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';

const routes: Routes = [
  {path:'admin-landling', component: AdminLandingComponent},
  {path: 'admin-register', component: RegisterAdminComponent},
  {path: 'admin-login', component:AdminLoginComponent},
  {path: 'admin-forgot-password', component:AdminForgotPasswordComponent}, 
  {path: 'admin-login/admin-forgot-password', redirectTo:'admin-forgot-password'},
  {path: 'bus-list', component: BusListComponent, canActivate:[AdminGuardGuard],
  children:
  [
    //{path: 'bus-list', component: BusListComponent},
    {path: 'add-bus', component: AddBusComponent, canDeactivate:[AdminDeActivateGuard]},
    {path: 'update-bus/:busId', component: UpdateBusComponent},
    {path: 'logout', component:AdminLogoutComponent},
  ]
  },
  //{path: 'bus-list', component: BusListComponent},
  {path: 'add-bus', component: AddBusComponent, canDeactivate:[AdminDeActivateGuard], canActivate:[AdminGuardGuard]},
  {path:'admin-home', component: AdminHomeComponent, canActivate:[AdminGuardGuard]},
  {path: 'update-bus/:busId', component: UpdateBusComponent, canActivate:[AdminGuardGuard]},
  {path: 'logout', component:AdminLogoutComponent,canActivate:[AdminGuardGuard]},
  {path: '', redirectTo: 'admin-landling', pathMatch:'full'},


  
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
