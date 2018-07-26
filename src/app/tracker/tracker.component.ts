import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';
import { Items } from '../tracker';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
