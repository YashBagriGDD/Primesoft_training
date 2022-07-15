import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css'],
})
export class PipesExampleComponent implements OnInit {
  today = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().getTime().toString()), 1000);
  });
  firstName: string = 'Yash';
  lastName: string = 'Bagri';

  constructor() {}

  ngOnInit(): void {}
}
