import React from 'react';

const Profile = () => {
  return (
    <div className='profile__wrapper'>
      <div className='profile__header'>
        <h1>Профиль пользоваетля</h1>
        <button className='button button__edit'>Редактировать</button>
      </div>
        <form className='profile__form'>
          <label>
            Name
            <input value='Иван Иванов' />
          </label>
          <label>
            User name
            <input value='Иван Иванов' />
          </label>
          <label>
            E-mail
            <input value='example@mail.com' />
          </label>
          <label>
          Street
            <input value='ул. Пример' />
          </label>
          <label>
          City
            <input value='Москва' />
          </label>
          <label>
          Zip code
            <input value='1234234' />
          </label>
          <label>
          Phone
            <input value='89991112233' />
          </label>
          <label>
          Website
            <input value='www.example.com' />
          </label>
          <label>
          Comment
            <textarea rows={4}>
            </textarea>
          </label>
        </form>
        <button></button>
    </div>
  );
};

export default Profile;
