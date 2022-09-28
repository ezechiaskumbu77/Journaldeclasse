import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  list = [
    {title:"Communication"},
    {title:"Administration"},
    {title:"Communication"},
    {title:"Suivi général et individuel des élèves "},
  ];

  ngOnInit(): void {
  }

}
