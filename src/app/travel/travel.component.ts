import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
ngOnInit(): void {
gsap.registerPlugin(ScrollTrigger);
  gsap.from('#monutain', {
    scrollTrigger : {
      scrub : true
      },
     y: 100,
   });

   gsap.from('#monutain2', {
    scrollTrigger : {
      scrub : true
      },
     y: 50,
   });

   gsap.from('#trees2', {
    scrollTrigger : {
      scrub : true
      },
     x: -50,
   });

   gsap.from('#trees1', {
    scrollTrigger : {
      scrub : true
      },
     x: 50,
   });

   

   gsap.from('#man', {
    scrollTrigger : {
      scrub : true
      },
     x: -200,
   });

   gsap.from('#plants', {
    scrollTrigger : {
      scrub : true
      },
     x: -50,
   });

   gsap.from('#text', {
    scrollTrigger : {
      scrub : true
      },
     x: 400,
   });
}
}
