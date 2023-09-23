import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
ngOnInit(): void {
  
const text:any = document.getElementById('text');
const bird1:any = document.getElementById('bird1');
const bird2:any = document.getElementById('bird2');
const forest:any = document.getElementById('forest');
const btn:any = document.getElementById('btn');
const rocks:any = document.getElementById('rocks');
const header:any = document.getElementById('header');

window.addEventListener('scroll', () => {
     const value = window.scrollY;

     text.style.top = 50 + value * -0.5 + '%';
     bird1.style.top = value * -1.5 + 'px';
     bird1.style.left =value * 2 + 'px';
     bird2.style.top = value * -1.5 + 'px';
     bird2.style.left = value * -5 + 'px';
     btn.style.marginTop = value * 1.5 + 'px';
     rocks.style.top = value * -0.12 + 'px';
     forest.style.top = value * 0.25 + 'px';
     header.style.top = value * 0.5 + 'px'
})
}
}
