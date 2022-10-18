import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class aboutComponent implements OnInit {

  constructor() { }
  list = [
    {text:"Consultez-nous pour une toute autre expérience du numérique"},
    {text:"La confiance caractéise nos rapports avec nos partenaires"},
    {text:"Nous pronons la rigueur"},
    {text:"Nous croyons qu'un travail intelligible de dur labeur paye toujours"},
  ];

  ngOnInit(): void {
  }

}
