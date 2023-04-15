import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-forgot-password',
  templateUrl: './admin-forgot-password.component.html',
  styleUrls: ['./admin-forgot-password.component.css']
})
export class AdminForgotPasswordComponent implements OnInit {

  adminLogin:Admin = new Admin();
  private state: boolean = false;

  constructor(private adminService:AdminServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  updatePassword(){
    this.state = window.confirm("Are you sure you want to update the password?");
    if(this.state==true){
      this.adminService.updatePassword(this.adminLogin).subscribe(data=>{
        this.router.navigate(["/admin-login"]);
      })
    }else{
      //navigate to same page
    }
  }

}
