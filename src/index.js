import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { App } from './containers';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHistory } from 'history'
import createStore from './store'
import { Provider } from 'react-redux'
import createRoutes from './routes'

const routes = createRoutes()
const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>
), document.getElementById('root'));
