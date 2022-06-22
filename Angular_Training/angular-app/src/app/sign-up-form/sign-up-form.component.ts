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
import { Store } from '@ngrx/store';
import { addUserData } from './store/sign-up-form.actions';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;
  genders: string[] = ['Male', 'Female', 'Other'];
  forbiddenWords: string[] = ['admin', 'test'];

  //regexp
  oneLower: RegExp = /^(?=.*[a-z])/;
  oneUpper: RegExp = /^(?=.*[A-Z])/;
  oneDigit: RegExp = /^(?=.*\d)/;
  oneSpecialChar: RegExp = /^(?=.*[\W])/;

  constructor(private store: Store) {}

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
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.markAllAsTouched();

    if (this.signUpForm.valid) {
      let formData = {
        firstName: this.signUpForm.get('firstName')?.value,
        lastName: this.signUpForm.get('lastName')?.value,
        username: this.signUpForm.get('username')?.value,
        password: this.signUpForm.get('password')?.value,
        gender: this.signUpForm.get('gender')?.value,
        age: this.signUpForm.get('age')?.value,
        address: this.signUpForm.get('address')?.value,
      };

      this.store.dispatch(addUserData(formData));
    }
  }

  clearForm() {
    this.signUpForm.reset({ gender: 'Other' });
  }

  testUsername(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
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
