import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormProfile from '../components/UI/FormProfile';
import { useActions } from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

const Profile: FC = () => {
  const [editActive, setEditActive] = useState(false);
  const { id } = useParams();
  const { profile, isLoading, isError } = useTypedSelector(
    (state) => state.profileReducer
  );
  const { fetchProfile } = useActions();
  useEffect(() => {
    fetchProfile(Number(id));
  }, []);
  return (
    <div className='profile__wrapper'>
      {isError ? (
        <h1>{isError}</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className='profile__header'>
            <h1>Профиль пользоваетля</h1>
            <button
              className='button button__edit'
              onClick={() => setEditActive(!editActive)}
            >
              Редактировать
            </button>
          </div>
          <FormProfile profile={profile} editActive={editActive} />
        </>
      )}
    </div>
  );
};

export default Profile;
