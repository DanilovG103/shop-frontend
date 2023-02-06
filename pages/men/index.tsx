import { GoodList, Layout } from 'src/components'
import { GoodCategoryType } from 'src/generated/graphql'
import { useGoods } from 'src/hooks'

export default function MenPage() {
  const { data, total } = useGoods({
    where: {
      category: { equals: GoodCategoryType.Male },
    },
  })

  return (
    <Layout title="Мужская одежда">
      <GoodList goods={data ?? []} />
    </Layout>
  )
}
