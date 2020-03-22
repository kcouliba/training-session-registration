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
      <section className="hero is-light is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{name}</h1>
            <h2 className="subtitle is-3">
              From {startDate} to {endDate}
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default SessionHeader
