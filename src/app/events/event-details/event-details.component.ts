import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
 
@Component({
templateUrl:'./event-details.component.html',
styles:[`
.container { padding-left:20px; padding-right:20px; }
`]
})
export class EventDetailsComponent implements OnInit{
 event:any;

    constructor(private eventService:EventService){
//dependecy innjection
 }
 ngOnInit(): void { //life cycle hook
     this.event=this.eventService.getEventById(1);
 }
}