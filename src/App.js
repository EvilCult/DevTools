import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Redirect } from 'react-router-dom'
// import Lockr from 'lockr'

import History from './store/History'
import Store from './store/Store'
import RouteCfg from './store/Router'

const storeSetting = Store()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Provider store={storeSetting}>
        <Router BrowserHistory={History} basename="/">
          <RouteCfg />
        </Router>
      </Provider>
    )
  }

  requireAuth(Layout, props) {
    if (true) {
      return <Layout {...props} />
    } else {
      return <Redirect to="/index" />
    }
  }
}

export default App
