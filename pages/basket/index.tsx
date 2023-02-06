import { Box, Good, Layout, Text } from 'src/components'
import { useBasketContext } from 'src/context'

export default function BasketPage() {
  const { goods } = useBasketContext()

  if (!goods.length) {
    return (
      <Layout title="Корзина" withBrands={false}>
        <Box>
          <Text>Корзина пуста</Text>
        </Box>
      </Layout>
    )
  }

  return (
    <Layout title="Корзина" withBrands={false}>
      {goods.map((item) => (
        <Good key={item.id} good={item} />
      ))}
    </Layout>
  )
}
