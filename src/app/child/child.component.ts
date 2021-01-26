import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() parentName: string = "";
  @Output() changeParentNameEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeParentName() {
    this.parentName = "Peter";
    this.changeParentNameEmitter.emit(this.parentName);
  }
}
