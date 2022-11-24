import { ComponentCanDeactivate } from './../guard/pending-changes.guard';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit, ComponentCanDeactivate  {
  isDirty = false;
  constructor() { }
  canDeactivate() : boolean {
    return !this.isDirty;
  }

  ngOnInit(): void {
  }
  save() {

  }
}
