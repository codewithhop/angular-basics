import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() setName: EventEmitter<string> = new EventEmitter();
  
  @Input() set name(value: string) {
    if (value !== "") {
      this._name = value;
    } else {
      this._name = "Undefined Name";
    }
  };

  get name() {
    return this._name;
  }

  private _name: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  changeNameInParent() {
    this.setName.emit(this.name);
  }
}
