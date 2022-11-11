import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  signUpForm: FormGroup = this.fb.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    hobbies: this.fb.array([])
  })

  // signUpForm: FormGroup = new FormGroup({
  //   name: new FormControl('',[Validators.required]),
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   hobbies: new FormArray([])
  // })

  get emailError(){
    let emailMessage = '';
    let emailControl = this.signUpForm.get('email');
    if(emailControl?.touched){
      if(emailControl?.errors?.['required']){
        emailMessage = 'Email should not be empty';
      } else if(emailControl?.errors?.['email']){
        emailMessage = 'Email should be valid';
      }
    }
    return emailMessage;
  }

  get hobbiesControl(){
    return this.signUpForm.get('hobbies') as FormArray;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm.value)
  }

  onAddHobby(){
    (this.signUpForm.get('hobbies') as FormArray).push(this.fb.control(''));
  }

}
