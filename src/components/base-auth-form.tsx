import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useFormikContext } from 'formik'

import { AuthMutationVariables } from 'src/generated/graphql'

import { Input } from './input'

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

const Submit = styled(Button)`
  margin-top: 16px;
  width: 100%;
`

interface Props {
  buttonText: string
  children?: ReactNode
}

export const BaseAuthForm = ({ buttonText, children }: Props) => {
  const {
    dirty,
    isValid,
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    values,
  } = useFormikContext<AuthMutationVariables>()
  const disabled = !dirty || !isValid

  return (
    <Form onSubmit={handleSubmit}>
      {children}
      <Input
        value={values.email}
        type="email"
        label="E-mail"
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        style={{ marginBottom: '16px' }}
        error={!!errors.email}
        helperText={errors.email}
      />
      <Input
        value={values.password}
        type="password"
        onChange={handleChange('password')}
        onBlur={handleBlur('password')}
        label="Пароль"
        error={!!errors.password}
        helperText={errors.password}
      />
      <Submit
        type="submit"
        disabled={disabled}
        disableElevation
        color="primary"
        variant="contained"
        size="medium">
        {buttonText}
      </Submit>
    </Form>
  )
}
