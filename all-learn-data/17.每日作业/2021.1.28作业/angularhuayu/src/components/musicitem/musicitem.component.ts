import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicitem',
  templateUrl: './musicitem.component.html',
  styleUrls: ['./musicitem.component.css']
})
export class MusicitemComponent implements OnInit {

  constructor() { }
  @Input() musiclist!: any;
  ngOnInit() {
  }

}
