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
      text:"Chers enseignants nous mettons à votre disposition des outils de gestion numérique, qui vous permettent de gérer les activités de la classe (Leçons ; cours ; interrogations etc) ; de consulter les manuels de référence ; d’observer les absences et si nécessaire d’échanger rapidement avec les parents de vos élèves."
    },
    {
      icon:"fal fa-users",
      title:"Parents ",
      text:"Chers parents, nous nous soucions vraiment de l’éducation de vos enfants. Grâce à secoundo, vous serez en mesure de suivre l’évolution quotidienne des activités scolaire de vos enfants en toute simplicité et sans vous déplacer. Nous vous épargnons des dépenses dues aux achats de livres pour vos enfants. Juste avec leurs smartphones vos enfants seront en mesure de télécharger toute une panoplie prévue pour leur programme scolaire."
    },
    {
      icon:"fal fa-trophy-alt",
      title:"Elèves",
      text:"Chers élèves, nous voulons que étudier soit pour vous un plaisir, raison pour laquelle nous voulons vous faciliter la tâche. Pour vous accompagner dans cet objectif, nous avons mis en place toute une série de fonctionnalités telles que la bibliothèque numérique, le journal de classe numérique, l’édition de note audio, le cours interactifs en ligne etc."
    }
  ];

  ngOnInit(): void {
  }

}
