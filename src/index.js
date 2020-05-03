import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TranslationLoader from './components/TranslationLoader'
import './i18n'
import './index.css';
ReactDOM.render(
  <React.Suspense fallback={<TranslationLoader/>}>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);

