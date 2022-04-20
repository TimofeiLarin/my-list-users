import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <div className='list__wrapper'>
      <h1>Список пользователей</h1>
      <div className='list__users'>
        <div className='list__user'>
          <div className='list__user__content'>
            <p>
              <span>ФИО:</span> Иван Иванов
            </p>
            <p>
              <span>город:</span> Москва
            </p>
            <p>
              <span>компания:</span> ООО “Пример”
            </p>
          </div>
          <div className='list__user__more'>
            <Link to='/profile'>Подробнее</Link>
          </div>
        </div>{' '}
        <div className='list__user'>
          <div className='list__user__content'>
            <p>
              <span>ФИО:</span> Иван Иванов
            </p>
            <p>
              <span>город:</span> Москва
            </p>
            <p>
              <span>компания:</span> ООО “Пример”
            </p>
          </div>
          <div className='list__user__more'>
            <Link to='/profile'>Подробнее</Link>
          </div>
        </div>
      </div>
      <p className='list__totalFound'>Найдено 10 пользователей</p>
    </div>
  );
};

export default List;
