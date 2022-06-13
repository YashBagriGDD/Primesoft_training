import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InputAtomComponent } from './input-atom/input-atom.component';
import { FormComponent } from './form/form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    InputAtomComponent,
    FormComponent,
    SignUpFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
