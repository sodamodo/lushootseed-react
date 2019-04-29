import '../node_modules/normalize.scss/normalize.scss';
import './style/app.scss';
import config from 'config';

import React from 'react';
import { render } from 'react-dom';
import App from'./app.jsx';

function renderApp() {
  render(<App />, root)
}

renderApp();

if (config.appEnv === 'dev' ) {
  module.hot.accept(renderApp);
}
