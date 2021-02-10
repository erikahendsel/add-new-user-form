import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  addNewUserForm: FormGroup;
  user: User = new User();

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.addNewUserForm = this.fb.group({
      firstName: [this.user.firstName] ,
      lastName: [this.user.lastName],
      email: [this.user.email, Validators.required ],
      confirmEmail: [this.user.confirmEmail, Validators.required],
      languages: [this.user.languages],
      role: [this.user.role]
    })
  }
  onSubmit(): void {
    const emailControl = this.addNewUserForm.controls['email'].value
    const confirmEmailControl = this.addNewUserForm.controls['confirmEmail'].value
    
    //Check if email is empty
    if((emailControl === null || emailControl === '') && (confirmEmailControl === null || confirmEmailControl === '')) {
      window.alert('Email can not be empty');
    } else {
      //if email is not empty check if text matches
      if(emailControl === confirmEmailControl) {
        let formRawValues = this.addNewUserForm.getRawValue()
        console.log(formRawValues)
      } 
      else {
        window.alert('Emails do not match');
      }
    }
  }


}
