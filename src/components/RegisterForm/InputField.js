import React from 'react'
import { Field, ErrorMessage } from 'formik'

export const InputField = (props = {}) => {
  const { name, children } = props

  return (
    <div className="field">
      {children}
      <ErrorMessage className="help is-danger" name={name} component="div" />
    </div>
  )
}

export const TextInputField = (props = {}) => {
  const { name, label, type = 'text' } = props

  return (
    <InputField {...props}>
      <label className="label">{label}</label>
      <div className="control">
        <Field className="input" type={type} name={name} />
      </div>
    </InputField>
  )
}

export const DropDownInputField = (props = {}) => {
  const { name, label, children } = props

  return (
    <InputField {...props}>
      <label className="label">{label}</label>
      <div className="control">
        <Field className="select" as="select" name={name}>
          {children}
        </Field>
      </div>
    </InputField>
  )
}

export default InputField
