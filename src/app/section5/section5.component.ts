import { Component } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component {
  
  activeContent: number | null = 1;

  showContent(contentNumber: number): void {
    this.activeContent = contentNumber;
  }
}

