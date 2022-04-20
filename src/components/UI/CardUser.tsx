import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../models/IUser';

interface PropsUser {
  user: IUser
}

const CardUser: FC<PropsUser> = ({user}) => {
  const {name, address, company} = user;
  return (
    <div className='list__users'>
      <div className='list__user'>
        <div className='list__user__content'>
          <p>
            <span>ФИО:</span> {name}
          </p>
          <p>
            <span>город:</span> {address.city}
          </p>
          <p>
            <span>компания:</span>{company.name}
          </p>
        </div>
        <div className='list__user__more'>
          <Link to='/profile'>Подробнее</Link>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
