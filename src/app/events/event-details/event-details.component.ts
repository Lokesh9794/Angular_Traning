import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";
 
@Component({
templateUrl:'./event-details.component.html',
styles:[`
.container { padding-left:20px; padding-right:20px; }
`]
})
export class EventDetailsComponent implements OnInit{
 event:any;

    constructor(private eventService:EventService,private route:ActivatedRoute){
        //ActivatedRoute is used to take(info about routes) paramater from the url
//dependecy innjection
 }
 ngOnInit(): void { //life cycle hook
     this.event=this.eventService.getEventById(+this.route.snapshot.params["id"]); //methods are used to identify the parameters
 }
}