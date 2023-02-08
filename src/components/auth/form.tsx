import { Button, TextField } from '@material-ui/core'
import { FormikProps } from 'formik'
import styled from 'styled-components'

import type { AuthMutationVariables } from 'src/generated/graphql'

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  margin-top: 12px;
`

export const AuthForm = ({
  values,
  handleChange,
  handleBlur,
}: FormikProps<AuthMutationVariables>) => {
  return (
    <Form>
      <TextField
        value={values.email}
        type="email"
        variant="outlined"
        label="E-mail"
        style={{ marginBottom: '16px' }}
      />
      <TextField
        value={values.password}
        type="password"
        variant="outlined"
        label="Пароль"
      />
      <Button
        disableElevation
        color="primary"
        variant="contained"
        size="medium">
        Войти
      </Button>
    </Form>
  )
}
