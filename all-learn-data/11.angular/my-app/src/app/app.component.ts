import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lists: Array<number> = [1, 2, 3];
  constructor(public http: HttpClient) { }
  title = 'my-app';
  handleClick(): void {
    console.log("click")
  }
  ngOnInit() {
    console.log(this) //查看Http请求模块是否在模块上注册
    var url = "http://localhost:8000/top250"
    this.http.get(url).subscribe(res => {
      console.log(res)
    })
  }
}
