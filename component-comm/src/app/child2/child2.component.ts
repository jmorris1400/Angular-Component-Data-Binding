import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  count: number = 0;

  incrementChild2(){
    this.count++;
  }
  decrementChild2(){
    this.count--;
  }

}
