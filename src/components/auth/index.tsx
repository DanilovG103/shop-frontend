import React from 'react'
import { Formik, FormikHelpers } from 'formik'

import { AuthMutationVariables, useAuthMutation } from 'src/generated/graphql'

import { Box } from '../box'
import { Modal } from '../modal'
import { Text } from '../text'
import { AuthForm } from './form'

const errors = {
  email: 'Неверный e-mail или пароль',
  password: 'Неверный e-mail или пароль',
}

const initialValues: AuthMutationVariables = {
  email: '',
  password: '',
}

interface Props {
  open: boolean
  onClose(): void
}

export const Auth = ({ open, onClose }: Props) => {
  const [auth] = useAuthMutation()

  const handleSubmit = async (
    values: AuthMutationVariables,
    helpers: FormikHelpers<AuthMutationVariables>,
  ) => {
    try {
      await auth({ variables: values })
    } catch {
      helpers.setErrors(errors)
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        p="32px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <Text fontSize="24px" fontWeight="700" color="text_primary">
          Авторизация
        </Text>
        <Formik
          initialValues={initialValues}
          component={AuthForm}
          onSubmit={handleSubmit}
        />
      </Box>
    </Modal>
  )
}
