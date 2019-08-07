import thunkMiddleware from 'redux-thunk'
import {
  createLogger
} from 'redux-logger'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import config from 'config'
import rootReducer from '../reducers'

function createMiddlewares({
  isServer
}) {
  let middlewares = [
    thunkMiddleware
  ]

  if (config.env === 'development' && typeof window !== 'undefined') {
    middlewares.push(createLogger({
      level: 'info',
      collapsed: true,
    }))
  }

  return middlewares
}

export default (initialState = {}, context) => {
  let {
    isServer
  } = context
  let middlewares = createMiddlewares({
    isServer
  })

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  )
}