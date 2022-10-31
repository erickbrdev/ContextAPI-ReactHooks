import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from './context/provider';
import Hooks from './hooks';
import StudyHooks from './study';
import Location from './userEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <StudyHooks />
      <Hooks />
    </Provider>
      <Location />
  </React.StrictMode>
);

