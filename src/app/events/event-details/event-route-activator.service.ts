import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate{
constructor(private eventService:EventService,private router:Router){
}
    canActivate(route: ActivatedRouteSnapshot){
        const eventExits=!!this.eventService.getEventById(+route.params['id'])
        if(!eventExits){
            this.router.navigate(['/404'])
        }
            return  eventExits;
    }
}