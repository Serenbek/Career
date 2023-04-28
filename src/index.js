import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Trans } from "react-i18next";
import './i18n'
import { RingLoader } from 'react-spinners';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <React.Suspense fallback={<RingLoader color="#36d7b7"
    cssOverride={{ margin: "280px auto" }}
    loading
    size={200} />}>
    <Trans i18nKey=''>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Trans>
  </React.Suspense>
  //</React.StrictMode >
);
