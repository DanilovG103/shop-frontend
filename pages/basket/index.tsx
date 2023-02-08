import { Box, Good, Layout, Text } from 'src/components'
import { useBasketContext } from 'src/context'

export default function BasketPage() {
  const { goods } = useBasketContext()

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
