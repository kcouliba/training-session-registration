import React from 'react'
import { Form, Field } from 'formik'
import { string, boolean, object } from 'yup'

import { InputField, TextInputField, DropDownInputField } from './InputField'

export const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  status: '',
  subscribeNewsletter: false,
  conditionsApproved: false,
}

export const VALIDATION_SCHEMA = object().shape({
  firstName: string(),
  lastName: string(),
  email: string()
    .email()
    .required('email is required'),
  password: string().required('password is required'),
  passwordConfirm: string().required('password confirmation is required'),
  status: string(),
  subscribeNewsletter: boolean(),
  conditionsApproved: boolean().oneOf(
    [true],
    'terms and conditions have to be approved',
  ),
})

const InputForm = ({ isSubmitting }) => {
  return (
    <Form>
      <TextInputField name="firstName" label="FirstName" />
      <TextInputField name="lastName" label="LastName" />
      <TextInputField type="email" name="email" label="Email*" />
      <TextInputField type="password" name="password" label="Password*" />
      <TextInputField
        type="password"
        name="passwordConfirm"
        label="Password confirm*"
        required
      />
      <DropDownInputField as="select" name="status" label="Status">
        <option value="">Select status</option>
        <option value="teacher">teacher</option>
        <option value="teacher_assistant">teacher assistant</option>
        <option value="student">student</option>
      </DropDownInputField>
      <InputField name="subscribeNewsletter">
        <div className="control">
          <label className="checkbox">
            <Field
              className="checkbox"
              type="checkbox"
              name="subscribeNewsletter"
            />
            Subscribe to newsletter
          </label>
        </div>
      </InputField>
      <InputField name="conditionsApproved">
        <div className="control">
          <label className="checkbox">
            <Field
              className="checkbox"
              type="checkbox"
              name="conditionsApproved"
            />
            I have read terms and conditions*
          </label>
        </div>
      </InputField>
      <div className="level-right">
        <button
          className="button is-large is-primary"
          type="submit"
          disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </Form>
  )
}

export default InputForm
