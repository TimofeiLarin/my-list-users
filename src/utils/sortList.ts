import { IUser } from '../models/IUser';

export const sortCity = (users: IUser[]) => {
  const sortArr = users.sort((user1: IUser, user2: IUser) => {
    if (user1.address.city > user2.address.city) {
      return 1;
    }
    if (user1.address.city < user2.address.city) {
      return -1;
    }
    return 0;
  });
  return sortArr;
};

export const sortCompany = (users: IUser[]) => {
  const sortArr = users.sort((user1: IUser, user2: IUser) => {
    if (user1.company.name > user2.company.name) {
      return 1;
    }
    if (user1.company.name < user2.company.name) {
      return -1;
    }
    return 0;
  });
  return sortArr;
};
