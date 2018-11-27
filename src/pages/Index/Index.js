import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';

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
      <Button variant="contained" color="primary">
        Test Message
      </Button>
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(Index)
