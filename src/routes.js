import { Route, IndexRedirect, IndexRoute, Redirect } from 'react-router'
import React from 'react'

import {
  App
} from 'containers'
export default () => [(
  <Route path='/' component={App} key='app' />
)]
