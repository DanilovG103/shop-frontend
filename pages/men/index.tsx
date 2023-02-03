import styled from 'styled-components'

import { Box, Good, Layout } from 'src/components'
import { GoodCategoryType } from 'src/generated/graphql'
import { useGoods } from 'src/hooks'

const CardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  margin-top: 20px;
`

export default function Page() {
  const { data, total } = useGoods({
    where: {
      category: { equals: GoodCategoryType.Male },
    },
  })

  return (
    <Layout title="Мужская одежда">
      <CardContainer>
        {data?.map((item) => (
          <Good key={item.id} good={item} />
        ))}
      </CardContainer>
    </Layout>
  )
}
