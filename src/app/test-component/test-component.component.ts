import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styles: ['p { font-size: 60px; }'],
  styleUrls: ['./test-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponentComponent implements OnInit {

  firstName = "Peter";
  user = {
    firstName: "John"
  }
  isDisabled = false;
  constructor() { }

  ngOnInit(): void {
    this.user.firstName = "Greg";
  }

}
