import React from 'react';
import ReactDOM from 'react-dom/client';
// import ModernNormalise from 'react-modern-normalize';
import { Provider } from 'react-redux';
import { App } from 'components/App/App';
import { store } from './redux/store';
import FontStyles from '__fonts/__fonts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <ModernNormalise> */}
      <FontStyles />
      <App />
      {/* </ModernNormalise> */}
    </React.StrictMode>
  </Provider>
);
