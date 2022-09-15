import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class aboutComponent implements OnInit {

  constructor() { }
  list = [
    {text:"Business & Consultez-nous  Agency"},
    {text:"Awards Winning Business Comapny"},
    {text:"Business & Consultez-nous  Agency"},
    {text:"Awards Winning Business Comapny"},
  ];

  ngOnInit(): void {
  }

}
