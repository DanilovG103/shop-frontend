import { Box, Good, Layout, Text } from 'src/components'
import { useBasketQuery } from 'src/generated/graphql'

export default function BasketPage() {
  const { data } = useBasketQuery({
    variables: {
      where: {
        id: '',
      },
    },
  })

  const goods = data?.basket?.goods ?? []

  return (
    <Layout title="Корзина" withBrands={false}>
      {goods.length ? (
        goods.map((item) => <Good key={item.id} good={item} />)
      ) : (
        <Box>
          <Text>Корзина пуста</Text>
        </Box>
      )}
    </Layout>
  )
}
