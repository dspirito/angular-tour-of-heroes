import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //import FormsModule

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail-component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // import FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }