import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Autocomplete, Button } from '@mui/material'
import { FormikProps } from 'formik'

import { useAddressesLazyQuery } from 'src/generated'
import type { CreateRequestValues } from 'src/types'

import { Input } from '../input'

const Wrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 16px 0;
`

const Submit = styled(Button)`
  align-self: flex-end;
`

export const CreateRequestForm = (props: FormikProps<CreateRequestValues>) => {
  const { values, handleChange, handleBlur, errors } = props
  const [address, setAddress] = useState('')
  const [search, { data, loading }] = useAddressesLazyQuery()

  useEffect(() => {
    const timer = setTimeout(() => {
      search({
        variables: {
          query: address,
        },
      })
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [address, search])

  return (
    <form>
      <Wrapper>
        <Input
          label="E-mail"
          value={values.recipientEmail}
          onChange={handleChange('recipientEmail')}
          onBlur={handleBlur('recipientEmail')}
          error={!!errors.recipientEmail}
          helperText={errors.recipientEmail}
        />
        <Input
          label="Фамилия и Имя получателя"
          value={values.recipientName}
          onChange={handleChange('recipientName')}
          onBlur={handleBlur('recipientName')}
          error={!!errors.recipientName}
          helperText={errors.recipientName}
        />
        <Autocomplete
          disablePortal
          value={values.address}
          options={data?.addresses?.value ?? []}
          noOptionsText="Ничего не найдено"
          inputValue={address}
          onInputChange={(_, newValue) => setAddress(newValue)}
          renderInput={(params) => <Input label="Адрес доставки" {...params} />}
        />
        <Submit type="submit">Создать</Submit>
      </Wrapper>
    </form>
  )
}
