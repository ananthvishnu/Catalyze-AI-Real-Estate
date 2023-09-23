import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forest2',
  templateUrl: './forest2.component.html',
  styleUrls: ['./forest2.component.css'],
})
export class Forest2Component implements OnInit {
  ngOnInit(): void {
    let text: any = document.getElementById('text');
    let leaf: any = document.getElementById('leaf');
    let hill1: any = document.getElementById('hill1');
    let hill4: any = document.getElementById('hill4');
    let hill5: any = document.getElementById('hill5');

    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      text.style.marginTop = value * 2.5 + 'px';
      leaf.style.top = value * -1.5 + 'px';
      leaf.style.left = value * 1.5 + 'px';
      hill5.style.left = value * 1.5 + 'px';
      hill4.style.left = value * -1.5 + 'px';
      hill1.style.top = value * 0.5 + 'px';
    });
  }
}
