import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  title = 'My app on assignments !';
  ajoutActive = false;
  nomDevoir: string ="";

  assignments: Assignment[] = [
    {
      nom: "TP1 sur WebComponents, un lecteur audio amélioré",
      dateDeRendu: new Date('2020-11-17'),
      rendu: true
    },
    {
      nom: "TP2 sur Angular, un joli gestionnaire de devoirs(Assignments)",
      dateDeRendu: new Date('2020-12-15'),
      rendu: false
    },
    {
      nom: "TP3 sur Angular, utilisation du router et de Web Services",
      dateDeRendu: new Date('2020-01-04'),
      rendu: false
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit(nom: string) {
    console.log(nom);
    //event.preventDefault();
  }
}
