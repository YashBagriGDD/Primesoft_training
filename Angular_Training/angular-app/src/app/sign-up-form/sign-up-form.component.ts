import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }
}
