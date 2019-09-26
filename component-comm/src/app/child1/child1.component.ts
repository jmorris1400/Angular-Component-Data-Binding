import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() count: number;

  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementChild(){
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrementChild(){
    this.count--;
    this.countChanged.emit(this.count);
  }
}
