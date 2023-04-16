import React from 'react'
import { Card, Chip, styled } from '@mui/material'
import Link from 'next/link'

import { RequestStatusType, useRequestsQuery } from 'src/generated'
import {
  formatPrice,
  formatRequestTime,
  Route,
  statuses,
  statusesColor,
} from 'src/utils'

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
    <Box display="flex" flexDirection="column" width="100%">
      {data.myRequests.map((item) => {
        const status = item.status ?? RequestStatusType.Pending

        return (
          <Link key={item.id} href={`${Route.request}/${item.id}`}>
            <Wrapper>
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                alignItems="center">
                <Text fontWeight="700" fontSize="22px">
                  Заказ №{item.id}
                </Text>
                <Box my={{ xs: '8px', md: '0px' }}>
                  <Chip
                    color={statusesColor[status]}
                    label={statuses[status]}
                  />
                </Box>
              </Box>
              <Text fontSize="18px">
                Создан: {formatRequestTime(item.createdAt)}
              </Text>
              <Text fontSize="18px">Сумма: {formatPrice(item.sum ?? 0)}</Text>
            </Wrapper>
          </Link>
        )
      })}
    </Box>
  )
}
