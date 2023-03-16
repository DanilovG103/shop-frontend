import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

import type { GoodsFragment } from 'src/generated/graphql'

import { Box } from '../box'
import { Good as GoodCard } from './good-card'

interface Props {
  goods: GoodsFragment[]
  fetchMore?(): Promise<void> | void
}

const CardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`

export const GoodList = ({ goods, fetchMore }: Props) => {
  const intersectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!fetchMore) return
    const element = intersectionRef.current
    if (!element) return
    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        await fetchMore()
      }
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [fetchMore])

  return (
    <>
      <CardContainer>
        {goods?.map((item) => (
          <GoodCard key={item.id} good={item} />
        ))}
      </CardContainer>
      <Box width="100%" height="1px" ref={intersectionRef} />
    </>
  )
}
