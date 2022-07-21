import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cardsArray!: any[];

  /** Based on the screen size, switch from standard to one column per row */

  cards$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
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

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.cards$.subscribe((result) => {
      this.cardsArray = result;
    });
  }

  hadleClick(card: any) {
    // this.isTouched = !this.isTouched;
    // const parentCardElement = (event.target as Element).parentElement
    //   ?.parentElement?.parentElement;
    // if (parentCardElement?.classList.contains('bg-red')) {
    //   parentCardElement?.classList.remove('bg-red');
    // } else {
    //   parentCardElement?.classList.add('bg-red');
    // }
    this.logger.log(card);
    card['isTouched'] = !card['isTouched'];
  }

  openDialog(index: number) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.logger.log(`Dialog result: ${result}`);
      // if (result) {
      //   this.cards$.subscribe((result) => {
      //     let newArray = result.filter((item, i) => {
      //       if (i === index) return false;
      //       return true;
      //     });
      //     this.logger.log(newArray);

      //     this.cardsArray = newArray;
      //   });
      this.cardsArray = this.cardsArray.filter((item, i) => {
        if (index === i) return false;
        return true;
      });

      this.logger.log(this.cardsArray);
    });
  }
}
