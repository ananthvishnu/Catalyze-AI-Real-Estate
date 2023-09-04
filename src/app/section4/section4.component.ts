import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css'],
  animations: [
    trigger('rotate', [
      state('normal', style({ transform: 'rotate(0deg)' })),
      state('hovered', style({ transform: 'rotate(360deg)' })),
      transition('normal <=> hovered', animate('1100ms ease-in-out')),
    ]),
    trigger('zoomOut', [
      state('hovered', style({ transform: 'scale(0.35)' })),
      state('unhovered', style({ transform: 'scale(1)' })),
      transition('hovered => unhovered', animate('100ms ease-in-out')),
    ]),
    trigger('slideRight', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('hovered', style({ transform: 'translateX(70px)' })),
      transition('normal => hovered', animate('0.3s ease')),
    ]),
    trigger('zoomOut1', [
      state('hovered', style({ transform: 'scale(0.8)' })),
      state('unhovered', style({ transform: 'scale(1)' })),
      transition('hovered => unhovered', animate('1600ms ease-in-out')),
    ]),
  ],
})
export class Section4Component implements OnInit{
  ngOnInit(): void {
    this.initializeSmoothScrolling();
  }
  
  initializeSmoothScrolling() {
    const columns = document.querySelectorAll('.scroll-column');
    columns.forEach((column, index) => {
      column.addEventListener('scroll', () => {
        const scrollPercentage = (column.scrollLeft / column.scrollWidth) * 100;
        if (scrollPercentage >= 50 && index < columns.length - 1) {
          columns[index + 1].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
          });
        }
      });
    });
  }



//animation svg
animationState = 'normal';

  onMouseEnter() {
    this.animationState = 'hovered';
  }

  onMouseLeave() {
    this.animationState = 'normal';
  }

//************************************ */
animationState1 = 'normal';

  onMouseEnter1() {
    this.animationState1 = 'hovered';
  }

  onMouseLeave1() {
    this.animationState1 = 'normal';
  }



//***************************************** */
// New method for slide-right animation
animationStateSlideRight = 'normal';

onMouseEnterSlideRight() {
  this.animationStateSlideRight = 'hovered';
}

onMouseLeaveSlideRight() {
  this.animationStateSlideRight = 'normal';
}


animationZoomOut = 'normal';

onMouseEnterZoomOut() {
  this.animationZoomOut = 'hovered';
}

onMouseLeaveZoomOut() {
  this.animationZoomOut = 'normal';
}



}
