import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { FormsModule } from '@angular/forms';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminForgotPasswordComponent } from './admin-forgot-password/admin-forgot-password.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { CustomerLandingComponent } from './customer-landing/customer-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    AddBusComponent,
    UpdateBusComponent,
    AdminHomeComponent,
    RegisterAdminComponent,
    AdminLoginComponent,
    PageNotFoundComponent,
    AdminLandingComponent,
    NavBarComponent,
    AdminForgotPasswordComponent,
    AdminLogoutComponent,
    CustomerLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
