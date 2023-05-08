import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Trans } from "react-i18next";
import './i18n'
import { RingLoader } from 'react-spinners';
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <React.Suspense fallback={<RingLoader color="#36d7b7"
      cssOverride={{ margin: "280px auto"}}
      loading
      size={200} />}>
      <Trans i18nKey=''>
        <BrowserRouter >
            <App />
        </BrowserRouter>
      </Trans>
    </React.Suspense>
    </PersistGate>
  </Provider>
  //</React.StrictMode >
);
