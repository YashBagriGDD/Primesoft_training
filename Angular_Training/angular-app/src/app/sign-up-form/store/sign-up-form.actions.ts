import { UserData } from './sign-up-form.model';
import { createAction, props } from '@ngrx/store';

export const addUserData = createAction(
  '[Sign Up Form] Add User Data',
  (data: UserData) => ({ data })
);
