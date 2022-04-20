import { UsersAction, UsersActionEnum, UserState } from './type';

const initialState: UserState = {
  users: [],
  isLoading: false,
  isError: '',
};

const usersReducer = (
  state = initialState,
  action: UsersAction
): UserState => {
  switch (action.type) {
    case UsersActionEnum.SET_USERS:
      return {...state, isLoading: true};
    case UsersActionEnum.SET_USERS_SUCCESS:
      return {...state, users: action.payload, isLoading: false };
    case UsersActionEnum.SET_USERS_ERROR:
      return {...state, isError: action.payload};
    default:
      return state;
  }
};

export default usersReducer;