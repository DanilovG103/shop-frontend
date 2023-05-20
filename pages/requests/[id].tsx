import { useCallback } from 'react'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Box, Layout, Text } from 'src/components'
import {
  RequestStatusType,
  useRequestByIdQuery,
  useUpdateRequestMutation,
} from 'src/generated'
import { env, formatPrice } from 'src/utils'

import { Stepper } from './ui/stepper'

export default function RequestPage() {
  const { query, replace } = useRouter()
  const { data } = useRequestByIdQuery({
    variables: {
      id: query.id?.toString() ?? '',
    },
  })

  const [cancelRequest] = useUpdateRequestMutation({
    variables: {
      where: {
        id: data?.request?.id,
      },
      data: {
        status: RequestStatusType.Cancelled,
      },
    },
    onCompleted() {
      replace('/me')
    },
  })

  const shouldShowStepper =
    data?.request?.status !== RequestStatusType.Cancelled &&
    data?.request?.status !== RequestStatusType.Rejected

  return (
    <Layout title={`Заказ №${query.id ?? ''}`} withAside={false}>
      {data?.request?.status === RequestStatusType.Rejected && (
        <Box>
          <Text fontSize="28px" fontWeight={700} color="error">
            Заказ отклонен
          </Text>
          <Text>Причина: {data?.request?.rejectReason}</Text>
        </Box>
      )}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text as="h1">Заказ №{query.id ?? ''}</Text>
        {data?.request?.status === RequestStatusType.Created && (
          <Button
            variant="outlined"
            color="error"
            onClick={() => cancelRequest()}>
            Отменить заказ
          </Button>
        )}
      </Box>
      <Text fontSize="18px" lineHeight="28px">
        Сумма заказа: {formatPrice(data?.request?.sum ?? 0)}
      </Text>
      {shouldShowStepper && (
        <Box mt="24px">
          <Stepper
            currentStep={data?.request?.status ?? RequestStatusType.Created}
          />
        </Box>
      )}
      <Box mt="24px">
        {data?.request?.goods?.map((el) => (
          <Link key={el.id} href={`/good/${el.id}`}>
            <Image
              src={env.image + el?.images?.[0].image?.url}
              alt={el?.title ?? ''}
              width={150}
              height={150}
              style={{ borderRadius: 8 }}
            />
            <Text>{el.title}</Text>
          </Link>
        ))}
      </Box>
    </Layout>
  )
}
