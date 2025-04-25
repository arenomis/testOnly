// Импорты
import React from 'react';
import { Provider } from 'react-redux'; // Redux Provider
import { store } from './store';
import Timeline from './features/Timeline/ui/Timeline';

// Основной компонент App
const App = () => {
  // Проверка платформы (desktop или mobile)
  if (__PLATFORM__ === 'desktop') {
    return (
      <Provider store={store}>
        {/* Компонент временной шкалы */}
        <Timeline />
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