import { IUser } from '../../../models/IUser';

export interface ProfileState {
  profile: IUser;
  isLoading: boolean;
  isError: string;
}

export enum ProfileActionEnum {
  SET_PROFILE = 'SET_PROFILE',
  SET_PROFILE_SUCCESS = 'SET_PROFILE_SUCCESS',
  SET_PROFILE_ERROR = 'SET_PROFILE_ERROR',
}

export interface SetProfileAction {
  type: ProfileActionEnum.SET_PROFILE;
}

export interface SetProfileSuccessAction {
  type: ProfileActionEnum.SET_PROFILE_SUCCESS;
  payload: IUser;
}

export interface SetProfileErrorAction {
  type: ProfileActionEnum.SET_PROFILE_ERROR;
  payload: string;
}

export type ProfileAction =
  | SetProfileAction
  | SetProfileSuccessAction
  | SetProfileErrorAction;
