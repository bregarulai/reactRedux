import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './containers/HomePage'
import UserPage from './containers/UserPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/user/:userId">
            <UserPage />
          </Route>
          <Route>404 NOT FOUND!</Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
