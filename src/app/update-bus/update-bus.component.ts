import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  bus: Bus = new Bus();
  id!:number;

  constructor(private busService:BusService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['busId'];
    this.busService.getBusById(this.id).subscribe(data=>{
      this.bus = data;
    }, error => console.log(this.id,error)
    // alert("This bus is not available....")
    
    )
  }

  goToBusList(){
    this.router.navigate(["/bus-list"]);
  }

  // updateBus(){
  //   this.busService.updateBus(this.id,this.bus).subscribe(data=>{
  //     this.bus = new Bus();
  //     this.goToBusList();
  //   }, error=>alert("Bus details updation Failed !!!!!")
  //   );
  // }


  onSubmit(){
    this.busService.updateBus(this.id,this.bus).subscribe(data=>{
      this.goToBusList();
    }, error=>alert("Bus details updation Failed !!!!!")
    );
  }

}
