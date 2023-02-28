import React, { useCallback, useMemo } from 'react'
import { Formik, FormikConfig } from 'formik'

import { CreateRequestForm, Layout } from 'src/components'
import { useUserContext } from 'src/context'
import {
  RequestPaymentTypeType,
  useBasketQuery,
  useRequestMutation,
} from 'src/generated'
import type { CreateRequestValues } from 'src/types'

type Submit = FormikConfig<CreateRequestValues>['onSubmit']

export default function CreateRequestPage() {
  const { user } = useUserContext()
  const [createRequest] = useRequestMutation()
  const { data } = useBasketQuery({
    variables: {
      where: {
        id: user?.basketId,
      },
    },
  })

  const initialValues: CreateRequestValues = useMemo(
    () => ({
      address: '',
      paymentType: RequestPaymentTypeType.Receiving,
      recipientEmail: user?.email ?? '',
      recipientName: user?.name ?? '',
      sum: data?.basket?.sum ?? 0,
    }),
    [data?.basket?.sum, user?.email, user?.name],
  )

  const handleSubmit: Submit = useCallback(
    async (values, helpers) => {
      if (!user) return
      await createRequest({
        variables: {
          data: {
            ...values,
            goods: {
              connect: data?.basket?.goods?.map((item) => ({ id: item.id })),
            },
            user: {
              connect: {
                id: user.id,
              },
            },
          },
        },
      })
    },
    [createRequest, data?.basket?.goods, user],
  )

  return (
    <Layout title="Создание заказа" withAside={false} withTitle={false}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        component={CreateRequestForm}
      />
    </Layout>
  )
}
