import { Button } from '@material-ui/core'
import styled from 'styled-components'

import { Box, Good, Layout, Text } from 'src/components'
import { useUserContext } from 'src/context'
import { useBasketQuery } from 'src/generated/graphql'

const GoodsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

export default function BasketPage() {
  const { user } = useUserContext()
  const { data } = useBasketQuery({
    variables: {
      where: {
        id: user?.basketId,
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  const goods = data?.basket?.goods ?? []

  return (
    <Layout title="Корзина" withAside={false} withTitle={false}>
      <Box display="flex" width="100%">
        <GoodsWrapper>
          {goods.length ? (
            goods.map((item) => (
              <Good key={item.id} good={item} displayType="basket" />
            ))
          ) : (
            <Box>
              <Text>Корзина пуста</Text>
            </Box>
          )}
        </GoodsWrapper>
        <Box maxWidth="230px" width="100%">
          <Button>Оформить заказ</Button>
        </Box>
      </Box>
    </Layout>
  )
}
