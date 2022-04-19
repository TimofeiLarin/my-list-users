import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import './styles/app.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <AppRouter />
    </div>
  );
}

export default App;
