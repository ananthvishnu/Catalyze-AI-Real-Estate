import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css'],
  animations: [
    trigger('zoomOut', [
      state('hovered', style({ transform: 'scale(0.5)' })),
      state('unhovered', style({ transform: 'scale(1)' })),
      transition('hovered => unhovered', animate('300ms ease-in-out')),
    ]),
    trigger('fadeOut', [
      state('unhovered', style({ opacity: 1 })),
      state('hovered', style({ opacity: 0 })),
      transition('unhovered <=> hovered', animate('300ms ease-in-out')),
    ]),
    trigger('pulse', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.04)' })),
      transition('normal <=> hovered', animate('200ms ease-in-out')),
    ]),
  ],
})
export class Section3Component {
  animationState = 'unhovered';

  onMouseEnter() {
    this.animationState = 'hovered';
  }

  onMouseLeave() {
    this.animationState = 'unhovered';
  }

//**************************************** */

animationState1 = 'unhovered';

  onMouseEnter1() {
    this.animationState1 = 'hovered';
  }

  onMouseLeave1() {
    this.animationState1 = 'unhovered';
  }

//************************************* */
animationState2 = 'unhovered';

onMouseEnter2() {
  this.animationState2 = 'hovered';
}

onMouseLeave2() {
  this.animationState2 = 'unhovered';
}


animationState3 = 'unhovered';


onMouseEnter3() {
  this.animationState3 = 'hovered';
}

onMouseLeave3() {
  this.animationState3 = 'unhovered';
}

//************************************** */
animationState4 = 'unhovered';


onMouseEnter4() {
  this.animationState4 = 'hovered';
}

onMouseLeave4() {
  this.animationState4 = 'unhovered';
}

}
