import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListComponent } from './events/events-list.component';
import {EventsListResolver } from './events/events-list-resolver.service';

const routes: Routes = [
  {path:'events/new', component:CreateEventComponent,canDeactivate:['canDeactiveCreateEvent']},
  {path:'events', component:EventListComponent,resolve:{events:EventsListResolver}},
  {path:'events/:id', component:EventDetailsComponent,canActivate:[EventRouteActivator]},
  {path:'404', component:Error404Component},
  //{path:'events/new', component:CreateEventComponent}, create a confusion if we put new path after id so we put this on the top
  {path:'',redirectTo:'/events',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
