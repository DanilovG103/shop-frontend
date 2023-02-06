import React from 'react'
import styled from 'styled-components'

import type { GoodsFragment } from 'src/generated/graphql'

import { Box } from '../box'
import { Good as GoodCard } from './good-card'

interface Props {
  goods: GoodsFragment[]
}

const CardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`

export const GoodList = ({ goods }: Props) => {
  return (
    <CardContainer>
      {goods?.map((item) => (
        <GoodCard key={item.id} good={item} />
      ))}
    </CardContainer>
  )
}
