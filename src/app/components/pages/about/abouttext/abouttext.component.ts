import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abouttext',
  templateUrl: './abouttext.component.html',
  styleUrls: ['./abouttext.component.css']
})
export class abouttextComponent implements OnInit {

  constructor() { }
  list = [
    {text:"Consultez-nous pour une experience differente avec le numéque"},
    {text:"La confiance caraterise le resenti de nos partenaires"},
  ];

  ngOnInit(): void {
  }

}
