import React, { FC, useEffect } from 'react';
import CardUser from '../components/UI/ListUsers';
import { useActions } from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

const List: FC = () => {
  const { users, isLoading, isError } = useTypedSelector(
    (state) => state.usersReducer
  );
  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className='list__wrapper'>
      {isError ? (
        <h1>{isError}</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Список пользователей</h1>
          {users.map(user => <CardUser key={user.id} user={user}/>)}
          <p className='list__totalFound'>Найдено {users.length} пользователей</p>
        </>
      )}
    </div>
  );
};

export default List;
