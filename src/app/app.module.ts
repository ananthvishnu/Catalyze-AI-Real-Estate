import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Section2Component } from './section2/section2.component';
import { VideoComponent } from './video/video.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section2Component,
    VideoComponent,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
