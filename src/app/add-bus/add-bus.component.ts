import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  bus: Bus = new Bus();
  
  cancelForm = true;

  constructor(private busService:BusService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  saveBus(){
    this.busService.addBus(this.bus).subscribe(data =>{
      console.log(data);
      // alert("Bus added successfully !!!!");
    },
    error => alert("Bus addition failed !!!!")
    );
  }

  goToBusList(){
    this.router.navigate(["/bus-list"]);
  }

  onSubmit(){
    console.log(this.bus);
    this.saveBus();
    this.goToBusList();
  }

}
