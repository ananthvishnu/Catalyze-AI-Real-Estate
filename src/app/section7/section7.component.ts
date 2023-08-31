import { Component } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap'; 
@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css'],
  providers:[NgbAccordionConfig]

})
export class Section7Component {
  panels: string[] = ['Provide your information', 'Select your location', 'Check Out', 'Access your dashboard'];
  content: string[] = ['Give us some details on yourself and your firm.', 'Provide a zip code and we will provide you with the highest propensity', 'On the check out page you can select the products and quantity of leads you would like per month.', 'You have immediate access to your dasboard and your lead'];
  images: string[] = [
    'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c2796b68ce6_fourth%20FS.webp',
     'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c786db68d1e_first.webp',
    'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c2bf0b68cf9_second.webp',
    'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843ca0a6b68d4c_RE.webp'
  ]; // Replace with actual image URLs
 
  activePanelIndex: number = -1; // Initialize with -1 to indicate no active panel initially
  activeButtonIndex: number = -1; // Initialize with -1 to indicate no active button initially
  currentPanel: string = this.panels[0];
  currentPanelIndex: number = 0;
 
  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    this.startAutoCycle();
  }
 
  startAutoCycle() {
    setInterval(() => {
      this.cyclePanel();
    }, 5000); // Change panel every 5 seconds (adjust the interval as needed)
  }
 
  cyclePanel() {
    this.currentPanelIndex = (this.currentPanelIndex + 1) % this.panels.length;
    this.currentPanel = this.panels[this.currentPanelIndex];
  }
 
  setCurrentPanel(panel: string) {
    this.currentPanel = panel;
    this.currentPanelIndex = this.panels.indexOf(panel);
  }
}
