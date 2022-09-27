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
      title:"Enseignants",
      subtile : "Réenergisez-vous",
      text:"Nous mettons à la disposition des enseignants un outils numérique de gestion. En tant qu’enseignant, vous serez en mesure de gérer les activités de la classe (leçons, cours, interrogations) consulter les absences. Si nécessaire, échanger avec les parents des élèves."
    },
    {
      icon:"fal fa-users",
      title:"Parents ",
      text:"Chers parents, nous sommes conscients combien l'éducation de vos enfants vous tient à cœur. Grâce à secoundo, vous serez désormais en mesure de suivre l'évolution quotidienne de vos enfants. "
    },
    {
      icon:"fal fa-trophy-alt",
      title:"Elèves",
      text:" Nous entendons faciliter autant que possible la vie des élèves. Pour accompagner ce processus, nous avons mis en place toute une série de fonctionnalités, telles que la création de groupes, l'édition de notes audio, etc."
    }
  ];

  ngOnInit(): void {
  }

}
