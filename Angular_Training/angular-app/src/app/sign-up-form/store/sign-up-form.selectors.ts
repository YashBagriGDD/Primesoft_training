import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserData } from './sign-up-form.model';
import { FormState } from './sign-up-form.reducer';

export const selectUserFeature = createFeatureSelector<UserData[]>('userData');

export const selectUserData = createSelector(
  selectUserFeature,
  (userData: UserData[]) => userData
);
