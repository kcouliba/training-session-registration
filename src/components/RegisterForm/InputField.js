import React from 'react'
import { Field, ErrorMessage } from 'formik'

export const InputField = (props = {}) => {
  const { as, type, name, label, children } = props

  return (
    <div>
      <label>{label}</label>
      <Field as={as} type={type} name={name}>
        {children}
      </Field>
      <ErrorMessage name={name} component="div" />
    </div>
  )
}

export default InputField
