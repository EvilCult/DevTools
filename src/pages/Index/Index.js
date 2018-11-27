import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


// import Action from '../../actions/act'
//
// let Act = new Action()

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
  }

  componentWillReceiveProps (nextProps) {
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <AppBar position="fixed">
            <Toolbar>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(Index)
