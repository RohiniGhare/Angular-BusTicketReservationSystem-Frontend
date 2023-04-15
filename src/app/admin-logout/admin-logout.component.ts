import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(private router:Router,
    private adminService:AdminServiceService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.adminService.setLoggedInStatus(false);
      this.router.navigate(['/']);
    }, 2000);
  }

}
