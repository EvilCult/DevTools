import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

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
      <div>Test Message</div>
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(Index)
