import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: '', component: CardsComponent },
      { path: 'signup', component: SignUpFormComponent },
      { path: 'users', component: UserDataComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
