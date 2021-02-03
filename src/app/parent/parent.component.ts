import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childNames = ["Child1", "Child 2", "Child 3"];
  constructor() { }

  ngOnInit(): void {
  }

  changeName(newValue: string, index: number) {
    this.childNames[index] = newValue;
  }
}
