import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  array = ['apple', 'mango', 'orange'];

  constructor() { }

  ngOnInit(): void {
  }


}
