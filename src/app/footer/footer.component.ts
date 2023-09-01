import { Component,HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
    email:new FormControl('',[Validators.required,Validators.email]),
    message:new FormControl('',[Validators.required,Validators.maxLength(200),Validators.pattern("^[a-zA-Z]+$")]),
    sections:new FormControl('',[Validators.required]),
    
  })



  get name(){
    return this.contactForm.get('name')
  }
  
  get email(){
    return this.contactForm.get('email')
  }
  get message(){
    return this.contactForm.get('message')
  }
  get sections(){
    return this.contactForm.get('sections')
  }
  
  
  
  onSubmit(){
    console.log(this.contactForm.value);
    this.contactForm.reset()
    
  }



    // activeDropdown: number | null = null;

    // toggleDropdown(dropdownNumber: number) {
    //     if (this.activeDropdown === dropdownNumber) {
    //         this.activeDropdown = null;
    //     } else {
    //         this.activeDropdown = dropdownNumber;
    //     }
    // }

    // isDropdownOpen(dropdownNumber: number): boolean {
    //     return this.activeDropdown === dropdownNumber;
    // }

    // //Listen for window resize events and reset activeDropdown if needed
    // @HostListener('window:resize', ['$event'])
    // onResize(event: Event) {
    //     if (window.innerWidth >= 768) {
    //         this.activeDropdown = null;
    //     }
    // }





    isMobile!: boolean;
    dropdownOpen: boolean[] = [];
    
    footerLinks = [
      {
        title: 'Financial Services',
        icon: 'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c2e9ab68d1b_S.svg',
        subLinks: [
          { title: 'Pricing', url: '#' },
          { title: 'Blog', url: '#' }
        ]
      },
      {
        title: 'Real Estate',
        icon: 'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c2e9ab68d1b_S.svg',
        subLinks: [
          { title: 'Pricing', url: '#' },
          { title: 'Blog', url: '/real-estate/blog' }
        ]
      },
    
      {
        title: 'Social media',
        icon: 'https://assets.website-files.com/63a1773692843c14b3b68ca0/63a1773692843c2e9ab68d1b_S.svg',
        subLinks: [
          { title: 'LinkedIn', url: '#' },
         
        ]
      },
      // Add other footer links here
    ];
    
    
    
    ngOnInit() {
      this.checkMobile();
      window.addEventListener('resize', this.checkMobile.bind(this));
     
    }
    
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
    
    toggleDropdown(index: number) {
      this.dropdownOpen[index] = !this.dropdownOpen[index];
    }
    
    isDropdownOpen(index: number) {
      return this.dropdownOpen[index];
      
    }
    
}
