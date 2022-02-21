import{Injectable, ResolvedReflectiveProvider} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {EventService} from './shared/event.service';

@Injectable()
export class EventsListResolver implements Resolve<any>{
     
    constructor(private eventService:EventService){

    }

resolve() {
    return this.eventService.getEvent();
}
}