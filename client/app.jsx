import React from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import NotFound from './container/NotFound'
import Count from './component/count'

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="count" push />
    </Route>
    <Route path="/count" component={Count} />
    <Route component={NotFound} />
  </Switch>
)

export default App

