import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  validateForm() {
    let form = document.getElementById('signUpForm') as HTMLFormElement;
    if (form.checkValidity() === false) {
      event?.preventDefault();
      event?.stopPropagation();
    }
    form.classList.add('was-validated');
  }
}
