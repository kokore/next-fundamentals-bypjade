import React, { Component, Fragment } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import styled, { css } from 'styled-components'

import { Link } from '@routes'
import Container from '@components/shared/layout/Container'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.gutter} 0;
`

const FormGroup = styled.div`
  display: flex;

  & + & {
    margin-top: ${props => props.theme.gutter};
  }
`

const FormLabel = styled.label`
  &::after {
    content: ':';
  }

  width: 150px;
`

const FormInput = styled.input`
  flex: 1;
`

const SubmitButton = styled.button`
  ${props => css`
    margin-top: ${props.theme.gutter};
    padding: calc(${props.theme.gutter} / 2) ${props.theme.gutter};
    background: ${props.theme.primaryColor};
    color: #fff;
  `}
`

class AuthForm extends Component {
  render() {
    const { formType, onSubmit } = this.props

    return (
      <Container>
        <Formik
          initialValues={{
            email: '',
            password: '',
            firstName: '',
            lastName: ''
          }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email()
              .required(),
            password: yup.string().required()
          })}
          onSubmit={values => onSubmit(values)}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && <div>{errors.email}</div>}
              </FormGroup>
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormInput
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <div>{errors.password}</div>
                )}
              </FormGroup>
              {formType === 'SIGN_UP' && (
                <Fragment>
                  <FormGroup>
                    <FormLabel>First Name</FormLabel>
                    <FormInput
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    {touched.firstName && errors.firstName && (
                      <div>{errors.firstName}</div>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Last Name</FormLabel>
                    <FormInput
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    {touched.lastName && errors.lastName && (
                      <div>{errors.lastName}</div>
                    )}
                  </FormGroup>
                </Fragment>
              )}
              <SubmitButton type="submit">Submit</SubmitButton>
              {formType === 'SIGN_UP' ? (
                <Link route="/auth/signin">
                  <a>Signin</a>
                </Link>
              ) : (
                <Link route="/auth/signup">
                  <a>Signup</a>
                </Link>
              )}
            </Form>
          )}
        />
      </Container>
    )
  }
}

export default AuthForm
