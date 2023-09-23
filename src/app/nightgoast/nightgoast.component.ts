import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nightgoast',
  templateUrl: './nightgoast.component.html',
  styleUrls: ['./nightgoast.component.css']
})
export class NightgoastComponent implements OnInit{
ngOnInit(): void {
  const text:any = document.getElementById('text');
const treeLeft:any  = document.getElementById('tree-left');
const treeRight:any  = document.getElementById('tree-right');
const gateLeft:any  = document.getElementById('gate-left');
const gateRight:any  = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    const value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.5 + 'px';
    gateRight.style.left = value * -0.5 + 'px';
})
}
}
