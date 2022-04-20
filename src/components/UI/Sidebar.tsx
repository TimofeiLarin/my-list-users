import { FC, memo } from 'react';
import { useActions } from '../../hooks/useActions';

const Sidebar: FC = memo(() => {
  const { setUsersSortCity, setUsersSortCompany } = useActions();

  const clickSortCity = () => setUsersSortCity();
  const clickSortCompany = () => setUsersSortCompany();

  return (
    <div className='sidebar'>
      <h2>Сортировка</h2>
      <button className='button button__sidebar' onClick={clickSortCity}>
        по городу
      </button>
      <button className='button button__sidebar' onClick={clickSortCompany}>
        по компании
      </button>
    </div>
  );
});

export default Sidebar;
