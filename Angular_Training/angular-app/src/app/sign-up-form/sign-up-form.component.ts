import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      gender: new FormControl('Other'),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
