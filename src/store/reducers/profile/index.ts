import { IUser } from '../../../models/IUser';
import { ProfileAction, ProfileActionEnum, ProfileState } from './type';

const initialState: ProfileState = {
  profile: {} as IUser,
  isLoading: false,
  isError: '',
};

const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfileActionEnum.SET_PROFILE:
      return { ...state, isLoading: true };
    case ProfileActionEnum.SET_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, isLoading: false };
    case ProfileActionEnum.SET_PROFILE_ERROR:
      return { ...state, isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
