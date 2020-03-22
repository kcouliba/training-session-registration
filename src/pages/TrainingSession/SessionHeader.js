import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SessionHeader extends Component {
  static propTypes = {
    name: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }

  render() {
    const { name, startDate, endDate } = this.props

    return (
      <div>
        <p>{name}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
      </div>
    )
  }
}

export default SessionHeader
