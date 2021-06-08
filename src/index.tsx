import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import { AppRouter } from './AppRouter';

import 'styles.css';

Sentry.init({
  dsn:
    'https://43adfad9e4714620b95599b96a40be42@o504051.ingest.sentry.io/5801596',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
