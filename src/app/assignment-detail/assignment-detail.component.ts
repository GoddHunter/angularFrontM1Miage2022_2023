import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignment';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit{

  @Input() assignmentReceived!: Assignment;

  ngOnInit(): void {
      
  }
}
