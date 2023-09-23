import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css'],
})
export class ForestComponent implements OnInit {
  ngOnInit(): void {
    let background1: any = document.getElementById('background1');
    let background2: any = document.getElementById('background2');
    let layer2: any = document.getElementById('layer2');
    let title: any = document.getElementById('title');
    let btn: any = document.getElementById('btn');
    let layer3: any = document.getElementById('layer3');
    let layer4: any = document.getElementById('layer4');

    window.addEventListener('scroll', function () {
      let value = window.scrollY;

      background1.style.top = value * 0 + 'px';
      background2.style.top = value * 0.9 + 'px';
      layer2.style.top = value * 0.3 + 'px';
      layer3.style.top = value * 0.1 + 'px';
      title.style.marginRight = value * 4 + 'px';
      btn.style.marginTop = value * 1 + 'px';
    });
  }
}
