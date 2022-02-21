import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';


@Component({
    templateUrl:'./events-list.component.html',
    styleUrls:['./events-list.component.css']
})

export class EventListComponent implements OnInit{
  events:any;
  constructor(private eventService:EventService,private toastr:ToastrService,private route:ActivatedRoute){ 
    //dependecy injection: in appModule we need to register our service first
    //here we use dependecy injection through constructor
  }

  ngOnInit(): void {
    this.events=this.route.snapshot.data['events'];
   // this.eventService.getEvent().subscribe(events=>{this.events=events});
  }

  handleClickEvent(data:any)
  {
    this.toastr.success(data);
  }
   // handleEventData(data:any){
   //     console.log("Recevied: ",data);
   // }
}