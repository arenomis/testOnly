import React from 'react';
import cls from './styles/app.module.scss';
import HistoricalDatesPage from './ui/HistoricalDatesPage';

const App = () => {
  if (__PLATFORM__ === 'desktop') {
    return (
      <div className={cls.app}>
        <HistoricalDatesPage />
      </div>
    );
  }

  if (__PLATFORM__ === 'mobile') {
    return <div>Mobile version</div>;
  }

  return null;
};

export default App;