import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';


@Component({
    selector:"event-list",
    templateUrl:'./events-list.component.html',
    styleUrls:['./events-list.component.css']
})

export class EventListComponent implements OnInit{
  events:any;
  constructor(private eventService:EventService,private toastr:ToastrService){ 
    //dependecy injection: in appModule we need to register our service first
    //here we use dependecy injection through constructor
  }

  ngOnInit(): void {
    this.events=this.eventService.getEvent();
  }

  handleClickEvent(data:any)
  {
    this.toastr.success(data);
  }
   // handleEventData(data:any){
   //     console.log("Recevied: ",data);
   // }
}