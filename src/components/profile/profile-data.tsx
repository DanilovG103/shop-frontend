import React from 'react'
import styled from '@emotion/styled'

import { useUserContext } from 'src/context'

import { Input } from '../input'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ProfileData = () => {
  const { user } = useUserContext()
  if (!user) return null

  return (
    <Form>
      <Input value={user.name} label="Имя Фамилия" />
      <Input value={user.email} type="email" label="E-mail" />
    </Form>
  )
}
