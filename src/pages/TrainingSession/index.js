import React, { Component } from 'react'

import SessionHeader from './SessionHeader'
import RegisterForm from '../../components/RegisterForm'

import session from '../../datasource/training-session.json'

export class TrainingSession extends Component {
  render() {
    return (
      <>
        <SessionHeader
          name={session.name}
          startDate={session.startDate}
          endDate={session.endDate}
        />
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2">Register</h1>
            <RegisterForm />
          </div>
        </div>
      </>
    )
  }
}

export default TrainingSession
