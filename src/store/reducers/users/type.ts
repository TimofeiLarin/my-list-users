import { IUser } from '../../../models/IUser';

export interface UserState {
  users: IUser[];
  isLoading: boolean;
  isError: string;
}

export enum UsersActionEnum {
  SET_USERS = 'SET_USERS',
  SET_USERS_SUCCESS = 'SET_USERS_SUCCESS',
  SET_USERS_ERROR = 'SET_USERS_ERROR ',
  SET_USERS_SORT_CITY = 'SET_USERS_SORT_CITY',
  SET_USERS_SORT_COMPANY = 'SET_USERS_SORT_COMPANY',
}

export interface SetUsersAction {
  type: UsersActionEnum.SET_USERS;
}

export interface SetUsersSuccessAction {
  type: UsersActionEnum.SET_USERS_SUCCESS;
  payload: IUser[];
}

export interface SetUsersErrorAction {
  type: UsersActionEnum.SET_USERS_ERROR;
  payload: string;
}

export interface SetUsersSortCity {
  type: UsersActionEnum.SET_USERS_SORT_CITY;
}

export interface SetUsersSortCompany {
  type: UsersActionEnum.SET_USERS_SORT_COMPANY;
}

export type UsersAction =
  | SetUsersAction
  | SetUsersSuccessAction
  | SetUsersErrorAction
  | SetUsersSortCity
  | SetUsersSortCompany;
