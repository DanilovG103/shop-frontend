import { GoodList, Layout } from 'src/components'
import { GoodCategoryType } from 'src/generated/graphql'
import { useGoods } from 'src/hooks'

export default function KidsPage() {
  const { data } = useGoods({
    where: { category: { equals: GoodCategoryType.Kids } },
  })

  return (
    <Layout title="Детская одежда">
      <GoodList goods={data} />
    </Layout>
  )
}
