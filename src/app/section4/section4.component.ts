import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
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
}
