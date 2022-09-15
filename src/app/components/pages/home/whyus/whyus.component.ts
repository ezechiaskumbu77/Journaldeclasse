import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  list = [
    {title:"Administration"},
    {title:"Analytics"},
    {title:"Communication"},
    {title:"Carnet de cotes"},
    {title:"Suivi des élèves"},
  ];

  ngOnInit(): void {
  }

}
