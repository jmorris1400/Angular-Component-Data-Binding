import { Component, ViewChild } from '@angular/core';
import { Child3Component } from './child3/child3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Communication';
 
  counter = 0;

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }

  countChangedHandler(count: number){
    this.counter = count
  }

  @ViewChild(Child3Component) child3: Child3Component;

  incrementChild3(){
    this.child3.incrementChild();
  }

  decrementChild3(){
    this.child3.decrementChild();
  }

}
