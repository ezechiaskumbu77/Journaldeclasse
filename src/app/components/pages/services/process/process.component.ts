import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor() { }
  list = [
    {
      icon:"fal fa-coffee",
      title:"Révigourez-vous ",
      text:"Enregistrez-vous entant qu'éducateur, parent ou élève."
    },
    {
      icon:"fal fa-users",
      title:"Exploirez votre outil",
      text:"Confiez des tâches utiles et ciblées à vos élèves, assignez une note à vos élèves, échangez sur leur performance avec leurs parents via l'application."
    },
    {
      icon:"fal fa-trophy-alt",
      title:"Atteignez vos objectifs scolaires",
      text:" Ne loupez plus aucun cotrôle, un devoir ni un test grâce au système de notification de votre application mobile Secoundo."
    }
  ];

  ngOnInit(): void {
  }

}
