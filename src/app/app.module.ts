import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Section2Component } from './section2/section2.component';
import { VideoComponent } from './video/video.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component';
import { Section8Component } from './section8/section8.component';
import { Section9Component } from './section9/section9.component';
import { FooterComponent } from './footer/footer.component';
import { AccordtionComponent } from './accordtion/accordtion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
//import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParallxComponent } from './parallx/parallx.component';
import { SunsetComponent } from './sunset/sunset.component';
import { ForestComponent } from './forest/forest.component';
import { AdventureComponent } from './adventure/adventure.component';
import { NightgoastComponent } from './nightgoast/nightgoast.component';
import { Forest2Component } from './forest2/forest2.component';
import { TravelComponent } from './travel/travel.component'; // Import BrowserAnimationsModule

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
    Section7Component,
    Section8Component,
    Section9Component,
    FooterComponent,
    AccordtionComponent,
    ParallxComponent,
    SunsetComponent,
    ForestComponent,
    AdventureComponent,
    NightgoastComponent,
    Forest2Component,
    TravelComponent
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgbAccordionModule,
    CarouselModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
