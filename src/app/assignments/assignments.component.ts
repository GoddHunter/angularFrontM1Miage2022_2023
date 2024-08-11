import { Component } from '@angular/core';
import { Assignment } from '../assignment';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  title= 'My app on assignments !';

  assignments: Assignment[] = [
    {
      nom: 'TP1',
      dateDeRendu: '2020-11-17',
      rendu: true
    },
    {
      nom: 'TP2',
      dateDeRendu: '2020-12-15',
      rendu: false
    },
    {
      nom: 'TP3',
      dateDeRendu: '2020-01-04',
      rendu: false
    },
  ];
}
