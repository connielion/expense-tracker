import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  hi = 'Hi. I am Connie.';
  intro = 'This is my project for challenge 1. There is no form validation...yet.';

  ngOnInit() {
  }

}
