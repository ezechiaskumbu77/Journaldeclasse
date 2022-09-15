import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abouttext',
  templateUrl: './abouttext.component.html',
  styleUrls: ['./abouttext.component.css']
})
export class abouttextComponent implements OnInit {

  constructor() { }
  list = [
    {text:"Business & Consultez-nous  Agency"},
    {text:"Awards Winning Business Comapny"},
  ];

  ngOnInit(): void {
  }

}
