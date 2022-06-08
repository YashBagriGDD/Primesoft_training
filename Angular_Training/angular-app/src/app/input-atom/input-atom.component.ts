import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-atom',
  templateUrl: './input-atom.component.html',
  styleUrls: ['./input-atom.component.css'],
})
export class InputAtomComponent implements OnInit {
  @Input() name!: string;
  @Input() type: string;
  @Input() idName!: string;
  @Input() placeholder: string;
  @Input() isRequired: boolean;
  @Input() value: string;

  constructor() {
    this.type = 'text';
    this.placeholder = '';
    this.isRequired = true;
    this.value = '';
  }

  ngOnInit(): void {}
}
