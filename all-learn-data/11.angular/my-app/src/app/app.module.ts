import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieItemComponent } from '../components/MovieItem/MovieItem.component'
@NgModule({
  // 配置/声明当前项目运行所依赖的组件
  declarations: [
    AppComponent,
    MovieItemComponent
  ],
  // 配置当前项目运行依赖的其他模块
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  // 配置项目所需要的服务
  providers: [],//指定应用的主视图
  bootstrap: [AppComponent]
})
// 通过导出AppModule这个模块，来启动应用
export class AppModule { }
