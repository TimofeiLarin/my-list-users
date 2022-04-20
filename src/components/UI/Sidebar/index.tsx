import { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <div className='sidebar'>
        <h2>Сортировка</h2>
        <button className='button button__sidebar'>по городу</button>
        <button className='button button__sidebar'>по компании</button>
      </div>
  );
};

export default Sidebar;
