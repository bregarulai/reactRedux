import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './containers/HomePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <HomePage />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
