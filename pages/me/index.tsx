import React from 'react'
import { Card, styled } from '@mui/material'
import Link from 'next/link'

import { Box, Layout, Text } from 'src/components'
import { useUserContext } from 'src/context'
import { useRequestsQuery } from 'src/generated'
import { Route } from 'src/utils'

const Wrapper = styled(Card)(() => ({
  padding: '12px 16px',
}))

export default function MePage() {
  const { user } = useUserContext()
  const { data } = useRequestsQuery({
    variables: {
      where: {
        user: {
          id: {
            equals: user?.id,
          },
        },
      },
    },
  })

  return (
    <Layout title="Мой профиль" withAside={false}>
      {data?.requests?.map((item) => (
        <Wrapper key={item.id}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Text fontWeight="700" fontSize="22px">
              Заказ №{item.id}
            </Text>
            <Text>{item.status}</Text>
          </Box>
          <Text fontWeight="700" fontSize="22px">
            Создан: {item.createdAt}
          </Text>
          <Link href={`${Route.request}/${item.id}`}>
            <Text>Детали заказа</Text>
          </Link>
        </Wrapper>
      ))}
    </Layout>
  )
}
