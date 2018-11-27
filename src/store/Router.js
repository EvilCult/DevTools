import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Index from '../pages/Index/Index'

class Router extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  loadingComponent({ isLoading, error }) {
    if (isLoading) {
        return (
          <div style={{marginTop:'250px',textAlign:'center',}}>
          </div>
        )
    } else if (error) {
        return (
          <div>Sorry, there was a problem loading the page.</div>
        )
    } else {
        return null;
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/index" component={Index}/>
        <Redirect to='/index'/>
      </Switch>
    )
  }
}

export default Router
