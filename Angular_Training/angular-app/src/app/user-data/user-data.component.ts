import { HttpClient } from '@angular/common/http';
import { FormState } from './../sign-up-form/store/sign-up-form.reducer';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserData } from '../sign-up-form/store/sign-up-form.selectors';
import { Observable } from 'rxjs';
import { UserData } from '../sign-up-form/store/sign-up-form.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit, AfterViewInit {
  BASE_URL = 'https://dummyjson.com';
  users: UserData[];
  apiUsers: any;
  p: number = 1;
  total: number = 0;
  columndefs: any[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store, private httpClient: HttpClient) {
    this.users = this.getValue(this.store.pipe(select(selectUserData)));
  }

  ngOnInit(): void {
    console.log(this.users);
    this.fetchApiUsers();
  }

  ngAfterViewInit(): void {}

  getValue(obj: Observable<any>) {
    let value: any;
    obj.subscribe((v) => (value = v));
    return value;
  }

  fetchApiUsers() {
    this.httpClient.get(this.BASE_URL + '/users').subscribe((posts: any) => {
      this.apiUsers = posts.users;
      this.total = posts.users.length;
      this.dataSource = new MatTableDataSource(this.apiUsers);
      this.dataSource.paginator = this.paginator;
      console.log(posts);
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
  }
}
