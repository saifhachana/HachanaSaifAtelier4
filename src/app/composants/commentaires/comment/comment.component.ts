import { Component, OnInit } from '@angular/core';
import { DetailmaterielComponent } from '../../informatique/detailmateriel/detailmateriel.component';

@Component({
  selector: 'SAI-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment= new DetailmaterielComponent();


  constructor() { }

  ngOnInit(): void {
  }

}
