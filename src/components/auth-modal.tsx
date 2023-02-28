import React, { useState } from 'react'
import type { ApolloError } from '@apollo/client'
import { styled } from '@mui/material'
import { Formik, FormikHelpers } from 'formik'

import { useUserContext } from 'src/context'
import {
  AuthMutationVariables,
  RegistrationMutationVariables,
  useAuthMutation,
  useRegistrationMutation,
} from 'src/generated'
import { authSchema, registrationSchema } from 'src/schema'

import { AuthForm } from './auth'
import { Box } from './box'
import { Modal as BaseModal } from './modal'
import { RegistrationForm } from './registration'
import { Text } from './text'

const errors = {
  email: 'Неверный e-mail или пароль',
  password: 'Неверный e-mail или пароль',
}

const authInitialValues: AuthMutationVariables = {
  email: '',
  password: '',
}

const registerInitialValues: RegistrationMutationVariables = {
  ...authInitialValues,
  name: '',
}

interface Props {
  open: boolean
  onClose(): void
}

const Modal = styled(BaseModal)(() => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const AuthModal = ({ open, onClose }: Props) => {
  const [isAuth, setIsAuth] = useState(true)
  const [auth] = useAuthMutation()
  const [register] = useRegistrationMutation()
  const { setUser } = useUserContext()

  const authSubmit = async (
    values: AuthMutationVariables,
    helpers: FormikHelpers<AuthMutationVariables>,
  ) => {
    const { data } = await auth({
      variables: values,
    })

    if (
      data?.authenticateUserWithPassword?.__typename ===
      'UserAuthenticationWithPasswordSuccess'
    ) {
      onClose()
      setUser(data.authenticateUserWithPassword.item)
    } else {
      helpers.setErrors(errors)
    }
  }

  const registerSubmit = async (
    values: RegistrationMutationVariables,
    helpers: FormikHelpers<RegistrationMutationVariables>,
  ) => {
    try {
      const { data } = await register({
        variables: values,
      })

      if (
        data?.registration?.__typename ===
        'UserAuthenticationWithPasswordSuccess'
      ) {
        onClose()
        setUser(data.registration.item)
      }
    } catch (error) {
      const err = error as ApolloError
      helpers.setFieldError('email', err.message)
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        bg="bg_primary"
        p="32px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <Text fontSize="24px" fontWeight="700" color="text_primary">
          {isAuth ? 'Авторизация' : 'Регистрация'}
        </Text>
        {isAuth ? (
          <Formik
            initialValues={authInitialValues}
            component={AuthForm}
            onSubmit={authSubmit}
            validationSchema={authSchema}
          />
        ) : (
          <Formik
            initialValues={registerInitialValues}
            component={RegistrationForm}
            onSubmit={registerSubmit}
            validationSchema={registrationSchema}
          />
        )}
        <Text
          cursor="pointer"
          mt="16px"
          color="text_secondary"
          onClick={() => setIsAuth((prev) => !prev)}>
          {isAuth ? 'Зарегистрироваться' : 'Войти'}
        </Text>
      </Box>
    </Modal>
  )
}
