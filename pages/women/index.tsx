import { GoodList, Layout } from 'src/components'
import { GoodCategoryType } from 'src/generated/graphql'
import { useGoods } from 'src/hooks'

export default function WomenPage() {
  const { data, total } = useGoods({
    where: {
      category: { equals: GoodCategoryType.Female },
    },
  })

  return (
    <Layout title="Женская одежда">
      <GoodList goods={data ?? []} />
    </Layout>
  )
}
