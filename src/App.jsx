import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import HeaderBar from './components/HeaderBar'

const App = () => {
  return (
    <Router>
      <HeaderBar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
