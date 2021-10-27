import { createStore, combineReducers } from 'redux'

import homePage from './containers/HomePage/reducers'
import userPage from './containers/UserPage/reducers'

const reducers = combineReducers({ homePage, userPage })

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
