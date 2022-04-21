import axios from 'axios';
import { Dispatch } from 'react';
import { IUser } from '../../../models/IUser';
import {
  ProfileAction,
  ProfileActionEnum,
  SetProfileAction,
  SetProfileErrorAction,
  SetProfileSuccessAction,
} from './type';

export const ProfileActionCreators = {
  setProfileAction: (): SetProfileAction => ({
    type: ProfileActionEnum.SET_PROFILE,
  }),
  setProfileSuccessAction: (profile: IUser): SetProfileSuccessAction => ({
    type: ProfileActionEnum.SET_PROFILE_SUCCESS,
    payload: profile,
  }),
  setProfileErrorAction: (error: string): SetProfileErrorAction => ({
    type: ProfileActionEnum.SET_PROFILE_ERROR,
    payload: error,
  }),
  fetchProfile: (id: number) => async (dispatch: Dispatch<ProfileAction>) => {
    try {
      dispatch(ProfileActionCreators.setProfileAction());
      const { data } = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      dispatch(ProfileActionCreators.setProfileSuccessAction(data));
    } catch (error) {
      dispatch(
        ProfileActionCreators.setProfileErrorAction(
          `Произошла ошибка получения данных.${error}`
        )
      );
    }
  },
};
