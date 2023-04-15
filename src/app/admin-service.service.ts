import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  
  private loggedIn:Boolean = false;

  private baseUrl = "http://localhost:8080/admin";
  
  constructor(private httpClient : HttpClient) { }

  loginAdmin(admin : Admin): Observable<Admin>{
    //this.loggedIn = true;
    console.log("loggedIn : "+this.loggedIn);
    return this.httpClient.post<Admin>(`${this.baseUrl}/login-admin`,admin);
  }

  getLoggedInStatus():Boolean{
    return this.loggedIn;
  }

  setLoggedInStatus(status:Boolean){
    this.loggedIn = status;
  }

  registerAdmin(admin : Admin):Observable<Object>{
    console.log(admin);
    return this.httpClient.post(`${this.baseUrl}/add-admin`,admin);
  }

  updatePassword(admin:Admin):Observable<Admin>{
    return this.httpClient.put<Admin>(`${this.baseUrl}/update-password`,admin);
  }

}
