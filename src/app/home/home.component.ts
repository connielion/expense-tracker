import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  hi = 'Hi.';
  intro = 'This is my project for challenge 1.';

  ngOnInit() {
  }

}
