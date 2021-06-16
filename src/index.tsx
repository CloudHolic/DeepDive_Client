// loading primereact stylesheets
import 'primereact/resources/themes/arya-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import 'resources/css/WebFonts.css';
import 'resources/css/OverrideTheme.css';

import 'react-perfect-scrollbar/dist/css/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

import MainFrame from 'views/MainFrame.tsx/MainFrame';

ReactDOM.render(
  <React.StrictMode>
    <MainFrame />
  </React.StrictMode>,
  document.getElementById('root'),
);
