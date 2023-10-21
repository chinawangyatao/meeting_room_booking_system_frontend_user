import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ConfigProvider theme={theme}>
              <App />
          </ConfigProvider>
      </Provider>
  </React.StrictMode>
);

