import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.css']
})
export class Section8Component {
  ngOnInit(): void {
    const testimonialSwiper = new Swiper('[data-swiper="testimonial"]', {
      loop: true,
      navigation: {
        prevEl: '[data-swiper="prev-testimonial"]',
        nextEl: '[data-swiper="next-testimonial"]',
      },
    });
  }
}
