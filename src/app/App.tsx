import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Timeline from './features/Timeline/ui/Timeline';
import cls from './styles/app.module.scss'; // Импорт глобальных стилей

// Основной компонент App
const App = () => {
  if (__PLATFORM__ === 'desktop') {
    return (
      <Provider store={store}>
        <div className={cls.app}> 
          <Timeline />
        </div>
      </Provider>
    );
  }

  if (__PLATFORM__ === 'mobile') {
    return <div>mobile version</div>;
  }

  // Если платформа не определена, возвращаем null
  return null;
};

export default App;