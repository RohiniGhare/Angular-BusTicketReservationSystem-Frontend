import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})


export class AdminLoginComponent implements OnInit {

  adminLogin:Admin = new Admin();
  msg = " ";
  constructor(private loginService: AdminServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  loginProcess(){
    this.loginService.loginAdmin(this.adminLogin).subscribe(data=>{
      this.loginService.setLoggedInStatus(true);
      alert("Login Successful !!!")
      this.goToHomePage();
    }, error=> {
      alert("Login Failed !!!");
      this.msg="Incorrect Credentials !! \n Please enter valid email address and password !!";
    }
    );
  }

  private goToHomePage(){
    this.router.navigate(["/bus-list"]);
  }

}
