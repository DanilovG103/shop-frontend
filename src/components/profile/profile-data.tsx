import React, { useCallback, useRef } from 'react'
import { toast } from 'react-toastify'
import styled from '@emotion/styled'
import { Button } from '@mui/material'

import { useUserContext } from 'src/context'
import { useUserUpdateMutation } from 'src/generated'

import { Input } from '../input'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

interface RefCurrent {
  value: string
}

export const ProfileData = () => {
  const { user, setUser } = useUserContext()
  const nameRef = useRef<RefCurrent>(null)
  const emailRef = useRef<RefCurrent>(null)
  const [update] = useUserUpdateMutation({
    onCompleted({ updateUser }) {
      toast.success('Данные обновлены')
      setUser((prev) => ({
        ...prev,
        id: prev?.id ?? '',
        name: updateUser?.name,
        email: updateUser?.email,
      }))
    },
  })

  const onClick = useCallback(() => {
    update({
      variables: {
        where: {
          id: user?.id,
        },
        data: {
          name: nameRef?.current?.value,
          email: emailRef?.current?.value,
        },
      },
    })
  }, [update, user?.id])

  if (!user) return null

  return (
    <Form>
      <Input defaultValue={user.name} label="Имя Фамилия" ref={nameRef} />
      <Input
        defaultValue={user.email}
        type="email"
        label="E-mail"
        ref={emailRef}
      />
      <Button variant="contained" onClick={onClick}>
        Сохранить
      </Button>
    </Form>
  )
}
