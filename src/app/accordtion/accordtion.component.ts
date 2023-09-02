import { Component, ElementRef, OnInit, Renderer2, ViewChild ,AfterViewInit } from '@angular/core';
// import { SwiperModule } from 'swiper/types/shared';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { OwlOptions  } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-accordtion',
  templateUrl: './accordtion.component.html',
  styleUrls: ['./accordtion.component.css'],
  providers:[]
})
export class AccordtionComponent implements OnInit  {
 
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left  owl-prev" ></i>',
      '<i class="fa fa-angle-right owl-next" ></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 1,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

  // @ViewChild('carousel') private carousel!: ElementRef;

  @ViewChild('carousel') private carousel: any; // Use OwlCarousel instead of ElementRef

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialize the Bootstrap carousel
    this.renderer.setProperty(
      this.carousel.nativeElement,
      'data-mdb-ride',
      'carousel'
    );
  }



  onClickNext(): void {
    console.log('Next button clicked');
    this.carousel.next();
  }
  
  onClickPrev(): void {
    console.log('Previous button clicked');
    this.carousel.prev();
  }

  
}
