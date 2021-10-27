import { createStore, combineReducers } from 'redux'

import homePage from './containers/HomePage/reducers'

const reducers = combineReducers({ homePage })

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
