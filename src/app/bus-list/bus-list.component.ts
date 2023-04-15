import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  buses: Bus[] = [];

  constructor(private busService: BusService,
    private router:Router) { }

  ngOnInit(): void {
    // this.buses= [
    //   {
    //     "busId":1,
    //     "busName": "SRS",
    //     "startPoint": "Mumbai",
    //     "endPoint": "Pune",
    //     "pricePerSeat": 400,
    //     "total_seats": 30,
    //     "date": new Date("20/5/2021")
    //   },
    //   {
    //     "busId":2,
    //     "busName": "Purple",
    //     "startPoint": "Mumbai",
    //     "endPoint": "Pune",
    //     "pricePerSeat": 700,
    //     "total_seats": 20,
    //     "date": new Date("20/5/2021")
    //   }
    // ];
    this.getBuses();
  }


  private getBuses(){
    this.busService.getBusList().subscribe(data => {
      this.buses = data;
    });
  }
  
  private state:boolean=false;
  deleteBus(busId:number){
    this.state = window.confirm("Are you sure you want to delete this bus?");
    if(this.state==true){
      this.busService.deleteBus(busId).subscribe(data=>{
        console.log(data);
        this.getBuses();
      })
    }
    this.getBuses();
  }

  updateBus(busId:number){
    this.router.navigate(['update-bus',busId]);
  }

}
