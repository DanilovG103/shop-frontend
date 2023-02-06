import { GoodList, Layout } from 'src/components'
import { OrderDirection } from 'src/generated/graphql'
import { useGoods } from 'src/hooks'

export default function Home() {
  const { data, loading, total } = useGoods({
    orderBy: {
      createdAt: OrderDirection.Desc,
    },
  })

  return (
    <Layout title="Новинки">
      <GoodList goods={data ?? []} />
    </Layout>
  )
}
