import { GoodList, Layout } from 'src/components'
import { GoodAudienceCategoryType } from 'src/generated/graphql'
import { useGoods } from 'src/hooks'

export default function WomenPage() {
  const { data, fetchMore } = useGoods({
    where: {
      audienceCategory: { equals: GoodAudienceCategoryType.Female },
    },
  })

  return (
    <Layout title="Женская одежда">
      <GoodList goods={data ?? []} fetchMore={fetchMore} />
    </Layout>
  )
}
