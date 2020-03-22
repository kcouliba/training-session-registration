import React from 'react'
import { Form, Field, ErrorMessage } from 'formik'
import { string, boolean, object } from 'yup'

import InputField from './InputField'

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
      <InputField type="text" name="firstName" label="FirstName" />
      <InputField type="text" name="lastName" label="LastName" />
      <InputField type="email" name="email" label="Email" />
      <InputField type="password" name="password" label="Password" />
      <InputField
        type="passwordConfirm"
        name="passwordConfirm"
        label="Password confirm"
      />
      <div>
        <label>Status</label>
        <Field as="select" name="status">
          <option value=""></option>
          <option value="teacher">teacher</option>
          <option value="teacher_assistant">teacher assistant</option>
          <option value="student">student</option>
        </Field>
        <ErrorMessage name="status" component="div" />
      </div>
      <InputField
        type="checkbox"
        name="subscribeNewsletter"
        label="Subscribe to newsletter"
      />
      <InputField
        type="checkbox"
        name="conditionsApproved"
        label="I have read terms and conditions"
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  )
}

export default InputForm
