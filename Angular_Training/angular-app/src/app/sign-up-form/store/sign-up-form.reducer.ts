import { createReducer, on } from '@ngrx/store';
import { addUserData } from './sign-up-form.actions';
import { UserData } from './sign-up-form.model';

export interface FormState {
  userData: ReadonlyArray<UserData>;
}

const initialState: ReadonlyArray<UserData> = [];

export const signUpFormReducer = createReducer(
  initialState,
  on(addUserData, (state, { data }) => {
    return [...state, data];
  })
);
