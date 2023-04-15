import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  admin:Admin = new Admin();

  constructor(private registerService:AdminServiceService) { }

  ngOnInit(): void {
  }

  adminRegister(){
    console.log(this.admin);
    this.registerService.registerAdmin(this.admin).subscribe(date=>{
      alert("Registration Successfull !!!")
      
    },error=>alert("Registration Failed !!!"));
  }

}
