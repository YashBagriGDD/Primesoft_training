import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @ViewChild('f') signUpForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  validateForm(f: NgForm) {
    console.log(f.value);
    let form = document.getElementById('signUpForm') as HTMLFormElement;
    if (form.checkValidity() === false) {
      event?.preventDefault();
      event?.stopPropagation();
    }
    form.classList.add('was-validated');
  }
}
