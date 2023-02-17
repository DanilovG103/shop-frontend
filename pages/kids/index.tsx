import { GoodList, Layout } from 'src/components'
import { GoodAudienceCategoryType } from 'src/generated/graphql'
import { useGoods } from 'src/hooks'

export default function KidsPage() {
  const { data } = useGoods({
    where: { audienceCategory: { equals: GoodAudienceCategoryType.Kids } },
  })

  return (
    <Layout title="Детская одежда">
      <GoodList goods={data ?? []} />
    </Layout>
  )
}
