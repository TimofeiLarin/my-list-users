import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import Sidebar from './components/UI/Sidebar';
import './styles/app.scss';

const App: FC = () => {
  return (
      <div className='app'>
        <Sidebar></Sidebar>
        <AppRouter />
      </div>
  );
};

export default App;
