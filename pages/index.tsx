import styled from 'styled-components'

import { Box, Good, Layout } from 'src/components'
import { OrderDirection } from 'src/generated/graphql'
import { useGoods } from 'src/hooks'

const CardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  margin-top: 20px;
`

export default function Home() {
  const { data, loading, total } = useGoods({
    orderBy: {
      createdAt: OrderDirection.Desc,
    },
  })

  return (
    <Layout title="Новинки">
      <CardContainer>
        {data?.map((good) => (
          <Good key={good.id} good={good} />
        ))}
      </CardContainer>
    </Layout>
  )
}