import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import {EventsListResolver } from './events/events-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {provide:'canDeactiveCreateEvent',
    useValue:checkDirtyState,
  },
  EventsListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

  export function  checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty)
    {
      return window.confirm('you have not save the event, do u really want to exit');
    }
    else 
    return true
  }

