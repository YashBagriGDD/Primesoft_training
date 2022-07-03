import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InputAtomComponent } from './input-atom/input-atom.component';
import { FormComponent } from './form/form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { UserDataComponent } from './user-data/user-data.component';
import { signUpFormReducer } from './sign-up-form/store/sign-up-form.reducer';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    InputAtomComponent,
    FormComponent,
    SignUpFormComponent,
    UserDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    StoreModule.forRoot({ userData: signUpFormReducer }, { metaReducers }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
