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
      nom: 'TP1',
      dateDeRendu: new Date('2020-11-17'),
      rendu: true
    },
    {
      nom: 'TP2',
      dateDeRendu: new Date('2020-12-15'),
      rendu: false
    },
    {
      nom: 'TP3',
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
