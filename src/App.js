import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Redirect } from 'react-router-dom'
// import Lockr from 'lockr'

import History from './store/History'
import Store from './store/Store'
import RouteCfg from './store/Router'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: red,
  }
})

const storeSetting = Store()

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={storeSetting}>
          <Router BrowserHistory={History} basename="/">
            <RouteCfg />
          </Router>
        </Provider>
      </MuiThemeProvider>
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
