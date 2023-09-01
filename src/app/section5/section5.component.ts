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






  activeButton: string = 'button1'; // This will store the active button

  handleButtonClick(button: string) {
    this.activeButton = button;
    this.changeButtonColors();
  }

  changeButtonColors() {
    switch (this.activeButton) {
      case 'button1':
        // Change colors for button 1
        break;
      case 'button2':
        // Change colors for button 2
        break;
      case 'button3':
        // Change colors for button 3
        break;
      case 'button4':
        // Change colors for button 4
        break;
      default:
        // Reset colors if no button is active
        this.resetButtonColors();
    }
  }

  resetButtonColors() {
    // Reset all button colors here
  }


}

