import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})

export class HeaderComponent implements OnInit, OnDestroy{

  user = false;
  eventSubscription: Subscription;

  constructor(private router: Router){

  }

  ngOnInit(){
    this.eventSubscription = this.router.events.subscribe( (event) => {

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
         // console.log(event)
         if(event.url !== "/"){
           this.user = true
         }
      }
  });
  }

  ngOnDestroy(){
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

}
