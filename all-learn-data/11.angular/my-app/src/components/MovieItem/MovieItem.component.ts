import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-MovieItem',
  templateUrl: './MovieItem.component.html',
  styleUrls: ['./MovieItem.component.css']
})
export class MovieItemComponent implements OnInit {

  constructor() { }
  @Input() title!: String;
  ngOnInit() {
  }

}
