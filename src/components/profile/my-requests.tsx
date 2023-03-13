import React from 'react'
import { Card, styled } from '@mui/material'
import Link from 'next/link'

import { useRequestsQuery } from 'src/generated'
import { formatPrice, formatRequestTime, Route } from 'src/utils'

import { Box } from '../box'
import { Loader } from '../loader'
import { Text } from '../text'

const Wrapper = styled(Card)(() => ({
  padding: '12px 16px',
  marginBottom: '16px',
}))

export const MyRequests = () => {
  const { data, loading } = useRequestsQuery()

  if (loading || !data?.myRequests) {
    return <Loader />
  }

  return (
    <Box px="16px" display="flex" flexDirection="column" width="100%">
      {data.myRequests.map((item) => (
        <Link key={item.id} href={`${Route.request}/${item.id}`}>
          <Wrapper>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              <Text fontWeight="700" fontSize="22px">
                Заказ №{item.id}
              </Text>
              <Text>{item.status}</Text>
            </Box>
            <Text fontSize="18px">
              Создан: {formatRequestTime(item.createdAt)}
            </Text>
            <Text fontSize="18px">Сумма: {formatPrice(item.sum ?? 0)}</Text>
          </Wrapper>
        </Link>
      ))}
    </Box>
  )
}
