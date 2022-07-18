import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css'],
})
export class PipesExampleComponent implements OnInit {
  today$ = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().getTime().toString()), 1000);
  });
  firstName: string = 'Yash';
  lastName: string = 'Bagri';
  p1: number = 0.259;
  p2: number = 1.5434233;
  arrayExample: string[] = ['a', 'b', 'c', 'd'];

  constructor() {}

  ngOnInit(): void {}
}
