import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunset',
  templateUrl: './sunset.component.html',
  styleUrls: ['./sunset.component.css']
})
export class SunsetComponent implements OnInit {


ngOnInit(): void {
let layer1:any = document.getElementById('layer1');
let layer2:any = document.getElementById('layer2');
let layer3:any = document.getElementById('layer3');
let layer4:any = document.getElementById('layer4');
let layer5:any = document.getElementById('layer5');
let title:any = document.getElementById('title');

window.addEventListener('scroll', function (){
    let value = window.scrollY;

    layer1.style.top = value * 0.3 + 'px';
    layer2.style.top = value * 0.7 + 'px';
    layer3.style.top = value * 0.8 + 'px';
    layer4.style.top = value * 0.9 + 'px';
    layer5.style.top = value * 1 + 'px';
    title.style.top = value * 1 + 'px';

})
}

}
