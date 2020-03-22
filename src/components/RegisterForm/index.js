import React from 'react'
import { Formik } from 'formik'

import InputForm, { INITIAL_VALUES, VALIDATION_SCHEMA } from './InputForm'

export const RegisterForm = (props = {}) => {
  const initialValues = props.initialValues || INITIAL_VALUES

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }
  const validate = values => {
    const { password, passwordConfirm } = values
    const errors = {}

    try {
      VALIDATION_SCHEMA.validateSync(values, { abortEarly: false })
      console.log({ password, passwordConfirm })
      if (password !== passwordConfirm) {
        errors.passwordConfirm = 'password mismatch'
      }
    } catch (err) {
      err.inner.forEach(error => (errors[error.path] = error.message))
    }
    return errors
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      validateOnChange={false}
      validateOnBlur={false}>
      {({ isSubmitting }) => <InputForm isSubmitting={isSubmitting} />}
    </Formik>
  )
}

export default RegisterForm
