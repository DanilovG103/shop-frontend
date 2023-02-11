import React from 'react'
import { useFormikContext } from 'formik'

import { RegistrationMutationVariables } from 'src/generated/graphql'

import { BaseAuthForm } from '../base-auth-form'
import { Input } from '../input'

export const RegistrationForm = () => {
  const { values, handleChange, errors, handleBlur } =
    useFormikContext<RegistrationMutationVariables>()

  return (
    <BaseAuthForm buttonText="Зарегистрироваться">
      <Input
        value={values.name}
        label="Имя Фамилия"
        onChange={handleChange('name')}
        onBlur={handleBlur('name')}
        style={{ marginBottom: '16px' }}
        error={!!errors.name}
        helperText={errors.name}
      />
    </BaseAuthForm>
  )
}
