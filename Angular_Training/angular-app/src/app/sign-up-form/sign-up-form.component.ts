import { ThisReceiver } from '@angular/compiler';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;
  genders: string[] = ['Male', 'Female', 'Other'];
  isSubmitted!: boolean;
  forbiddenWords: string[] = ['admin', 'test'];

  //regexp
  oneLower: RegExp = /^(?=.*[a-z])/;
  oneUpper: RegExp = /^(?=.*[A-Z])/;
  oneDigit: RegExp = /^(?=.*\d)/;
  oneSpecialChar: RegExp = /^(?=.*[\W])/;

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      username: new FormControl(null, [
        Validators.required,
        this.testUsername(),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        this.testPassword(),
      ]),
      gender: new FormControl('Other', Validators.required),
      age: new FormControl(null),
      address: new FormControl(null),
    });

    this.isSubmitted = false;
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.signUpForm);
  }

  clearForm() {
    this.isSubmitted = false;
    this.signUpForm.reset({ gender: 'Other' });
  }

  testUsername(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== null) {
        let value = <string>control.value;
        value = value.trim();

        if (this.forbiddenWords.indexOf(value.toLowerCase()) === -1)
          return null;

        return { forbiddenWord: true };
      }

      return null;
    };
  }

  testPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      let errors = {};

      const hasLower = this.oneLower.test(value);
      const hasUpper = this.oneUpper.test(value);
      const hasDigit = this.oneDigit.test(value);
      const hasSpecial = this.oneSpecialChar.test(value);

      if (hasLower && hasUpper && hasDigit && hasSpecial) return null;

      if (!hasLower) errors = { ...errors, noLower: true };
      if (!hasUpper) errors = { ...errors, noUpper: true };
      if (!hasDigit) errors = { ...errors, noDigit: true };
      if (!hasSpecial) errors = { ...errors, noSpecial: true };

      return errors;
    };
  }
}
