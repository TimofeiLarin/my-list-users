import axios from 'axios';
import { Dispatch } from 'react';
import { IUser } from '../../../models/IUser';
import {
  SetUsersAction,
  SetUsersErrorAction,
  SetUsersSortCity,
  SetUsersSortCompany,
  SetUsersSuccessAction,
  UsersAction,
  UsersActionEnum,
} from './type';

export const UsersActionCreators = {
  setUsersAction: (): SetUsersAction => ({
    type: UsersActionEnum.SET_USERS,
  }),
  setUsersActionSuccess: (users: IUser[]): SetUsersSuccessAction => ({
    type: UsersActionEnum.SET_USERS_SUCCESS,
    payload: users,
  }),
  setUsersActionError: (error: string): SetUsersErrorAction => ({
    type: UsersActionEnum.SET_USERS_ERROR,
    payload: error,
  }),
  fetchUsers: () => async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch(UsersActionCreators.setUsersAction());
      const {data} = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      dispatch(UsersActionCreators.setUsersActionSuccess(data))
    } catch (error) {
      dispatch(
        UsersActionCreators.setUsersActionError(
          'Произошла ошибка получения данных.'
        )
      );
    }
  },
  setUsersSortCity: (): SetUsersSortCity => ({
    type: UsersActionEnum.SET_USERS_SORT_CITY,
  }),
  setUsersSortCompany: (): SetUsersSortCompany => ({
    type: UsersActionEnum.SET_USERS_SORT_COMPANY,
  }),
};
