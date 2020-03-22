import React from 'react'
import { Field, ErrorMessage } from 'formik'

export const InputField = (props = {}) => {
  const { type, name, label } = props

  return (
    <div>
      <label>{label}</label>
      <Field type={type} name={name} />
      <ErrorMessage name={name} component="div" />
    </div>
  )
}

export default InputField
