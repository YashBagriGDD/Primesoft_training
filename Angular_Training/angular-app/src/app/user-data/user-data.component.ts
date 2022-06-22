import { FormState } from './../sign-up-form/store/sign-up-form.reducer';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserData } from '../sign-up-form/store/sign-up-form.selectors';
import { Observable } from 'rxjs';
import { UserData } from '../sign-up-form/store/sign-up-form.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  users$: Observable<UserData[]>;

  constructor(private store: Store) {
    this.users$ = this.store.pipe(select(selectUserData));
  }

  ngOnInit(): void {
    console.log(this.users$);
  }
}
