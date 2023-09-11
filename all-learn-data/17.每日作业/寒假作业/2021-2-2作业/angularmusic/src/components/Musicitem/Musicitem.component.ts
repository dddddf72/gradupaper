import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Musicitem',
  templateUrl: './Musicitem.component.html',
  styleUrls: ['./Musicitem.component.css']
})
export class MusicitemComponent implements OnInit {

  constructor() { }
  @Input() playlists!: any;
  ngOnInit() {
  }

}
