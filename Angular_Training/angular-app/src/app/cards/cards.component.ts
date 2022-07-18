import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, isTouched: false },
          { title: 'Card 2', cols: 1, rows: 1, isTouched: false },
          { title: 'Card 3', cols: 1, rows: 1, isTouched: false },
          { title: 'Card 4', cols: 1, rows: 1, isTouched: false },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, isTouched: false },
        { title: 'Card 2', cols: 1, rows: 1, isTouched: false },
        { title: 'Card 3', cols: 1, rows: 2, isTouched: false },
        { title: 'Card 4', cols: 1, rows: 1, isTouched: false },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  hadleClick(card: any) {
    // this.isTouched = !this.isTouched;
    // const parentCardElement = (event.target as Element).parentElement
    //   ?.parentElement?.parentElement;
    // if (parentCardElement?.classList.contains('bg-red')) {
    //   parentCardElement?.classList.remove('bg-red');
    // } else {
    //   parentCardElement?.classList.add('bg-red');
    // }
    console.log(card);
    card['isTouched'] = !card['isTouched'];
  }
}
