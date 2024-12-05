import './index.css'
import App from './App.tsx'
import store from './redux/store.ts';
import Banner from './pages/Banner.tsx';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Banner />
      <App />
    </Provider>
  </React.StrictMode>
);

