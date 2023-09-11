import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularhuayu';
  musiclist = [];
  constructor(public http: HttpClient) { }
  ngOnInit() {
    let url = "http://localhost:4000/top/playlist?cat=华语"
    this.http.get(url).subscribe((res: any) => {
      console.log(res)
      this.musiclist = res.playlists
    })
  }
}
