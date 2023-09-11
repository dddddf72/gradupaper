import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MusicitemComponent } from '../components/Musicitem/Musicitem.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicitemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
