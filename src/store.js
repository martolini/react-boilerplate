import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import * as reducers from 'reducers'

const rootReducer = combineReducers({
  routing: routerReducer,
  ...reducers
})

export default () => {
  const middleware = applyMiddleware(thunk)
  const composable = process.env.NODE_ENV === 'production' ? compose(middleware) : compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
  return createStore(rootReducer, composable)
}
