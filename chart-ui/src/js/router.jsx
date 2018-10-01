import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createHashHistory';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import Root from './Root';
import configureStore from './redux/configureStore';

const hashHistory = createHistory();
const store = configureStore({}, hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('app-container'),
);
