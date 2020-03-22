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
        <RegisterForm />
      </>
    )
  }
}

export default TrainingSession
