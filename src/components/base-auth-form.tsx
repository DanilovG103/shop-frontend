import React, { ReactNode, useEffect } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { useFormikContext } from 'formik'
import styled from 'styled-components'

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

const useStyles = makeStyles({
  submit: {
    marginTop: '16px',
    width: '100%',
  },
})

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
  const classes = useStyles()
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
      <Button
        type="submit"
        disabled={disabled}
        className={classes.submit}
        disableElevation
        color="primary"
        variant="contained"
        size="medium">
        {buttonText}
      </Button>
    </Form>
  )
}
