import { ProfileActionCreators } from './profile/actionCreators';
import { UsersActionCreators } from './users/actionCreators';

export const allActionCreators = {
  ...UsersActionCreators,
  ...ProfileActionCreators,
};
