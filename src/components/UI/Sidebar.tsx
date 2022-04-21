import { FC, memo } from 'react';
import { useMatch } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

const Sidebar: FC = memo(() => {
  const match = useMatch('/');
  const { setUsersSortCity, setUsersSortCompany } = useActions();

  const clickSortCity = () => setUsersSortCity();
  const clickSortCompany = () => setUsersSortCompany();

  return (
    <div className='sidebar'>
      <h2>Сортировка</h2>
      <button
        className={`button button__sidebar ${
          !match && 'button__sidebar__noDrop'
        }`}
        disabled={!match}
        onClick={clickSortCity}
      >
        по городу
      </button>
      <button
        className={`button button__sidebar ${
          !match && 'button__sidebar__noDrop'
        }`}
        disabled={!match}
        onClick={clickSortCompany}
      >
        по компании
      </button>
    </div>
  );
});

export default Sidebar;
