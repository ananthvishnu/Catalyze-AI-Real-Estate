import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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





  
}
