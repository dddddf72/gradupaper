import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmusic';
  playlists = [];
  constructor(public http: HttpClient) { }
  ngOnInit() {
    this.http.get("http://localhost:4000/top/playlist?cat=华语").subscribe((res: any) => {
      this.playlists = res.playlists
    })
  }
}
