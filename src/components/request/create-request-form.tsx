import React, { useCallback, useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import styled from '@emotion/styled'
import {
  Autocomplete,
  AutocompleteInputChangeReason,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import { FormikProps } from 'formik'

import { RequestPaymentTypeType, useAddressesLazyQuery } from 'src/generated'
import type { CreateRequestValues } from 'src/types'

import { Input } from '../input'
import { Text } from '../text'

const Wrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 16px 0;
  margin-top: 20px;
`

const Submit = styled(Button)`
  align-self: flex-end;
`

export const CreateRequestForm = (props: FormikProps<CreateRequestValues>) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    setFieldValue,
    handleSubmit,
  } = props
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

  const onInputChange = useCallback(
    (
      _: unknown,
      newInputValue: string,
      reason: AutocompleteInputChangeReason,
    ) => {
      if (reason === 'clear') {
        setFieldValue('address', '')
      } else {
        setAddress(newInputValue)
      }
    },
    [setFieldValue],
  )

  return (
    <form onSubmit={handleSubmit}>
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
        <PhoneInput
          country="ru"
          disableDropdown
          inputStyle={{ width: '100%' }}
          specialLabel="Номер телефона"
          value={values.phone}
          isValid={!errors.phone}
          onChange={(phone) => setFieldValue('phone', phone)}
          placeholder="(__)__-__-__"
          onlyCountries={['ru']}
        />
        <Autocomplete
          disablePortal
          value={values.address}
          options={data?.addresses?.value ?? []}
          noOptionsText="Ничего не найдено"
          inputValue={address}
          onInputChange={onInputChange}
          onChange={(_, newValue) => {
            if (!newValue) return
            setFieldValue('address', newValue)
          }}
          renderInput={(params) => <Input label="Адрес доставки" {...params} />}
        />
        <Text>Тип оплаты</Text>
        <RadioGroup value={values.paymentType}>
          <FormControlLabel
            value={RequestPaymentTypeType.Receiving}
            label="При получении"
            control={<Radio />}
          />
          <FormControlLabel
            value={RequestPaymentTypeType.Online}
            label="Онлайн картой"
            control={<Radio />}
            disabled
          />
        </RadioGroup>
        <Submit variant="outlined" type="submit">
          Создать
        </Submit>
      </Wrapper>
    </form>
  )
}
