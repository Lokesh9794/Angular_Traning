import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:"event-thumbnail",
    template:`
            <div class="well hoverwell thumbnail">
                <h2>{{childEvent?.name}}</h2>
                <div>Date: {{childEvent?.date}}</div>

                <!--<div [class.green]="childEvent?.time === '8:00 am'" [ngSwitch]="childEvent?.time">-->
               <!-- <div [ngClass]="{green:childEvent?.time === '8:00 am',bold:childEvent?.time === '8:00 am'}" [ngSwitch]="childEvent?.time">-->
               <div [ngClass]="getStartTimeClass()" [ngSwitch]="childEvent?.time"> 
                        Time: {{childEvent?.time}}
                        <span *ngSwitchCase="'8:00 am'">early start</span>
                        <span *ngSwitchCase="'10:00 am'">late start</span>
                        <span *ngSwitchDefault>Normal start</span>
                    
                </div>

                <div>Price: \${{childEvent?.price}}</div>

                <div [hidden]="!childEvent?.location"><!-- attribute binding [hidden]  attribute binding uses squre brackets-->
                    <span>Location: {{childEvent?.location?.address}}</span>
                    <span class="pad-left"></span>
                    <span>{{childEvent?.location?.city}}</span>
                    <span>{{childEvent?.location?.country}}</span>
                </div>

                <div *ngIf="childEvent?.onlineUrl">
                    Online URL:{{childEvent?.onlineUrl}}
                </div>

               <!-- <button class="btn btn-primary" (click)=handleClickMe()>Click Me!!!</button>-->
            </div>
    `,
    styles:[`
    .green{ color: #003300 !important}
    .bold{font-weight:bold}
    .pad-left{margin-left:10px}
    `]
})


export class EventThumbnailComponent{
@Input() childEvent:any;
@Output() eventClickData= new EventEmitter();
someProperty="This is some property from child";
handleClickMe(){
    this.eventClickData.emit(this.childEvent.name);
}
getStartTimeClass(){
    const isEarlyStart = this.childEvent.time &&    this.childEvent.time === '8:00 am' 
return {green:isEarlyStart, bold:isEarlyStart}
}

getStartTimeClass2(){
    if(this.childEvent.time &&    this.childEvent.time === '8:00 am' )
        return ['green', 'bold']
    return[]
}

getStartTimeClass3(){
    if(this.childEvent.time &&    this.childEvent.time === '8:00 am' )
        return 'green bold'
    return''
}

logInfo(){
    console.log("Info is logged");
}
}