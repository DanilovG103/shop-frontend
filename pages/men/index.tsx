import { GoodList, Layout } from 'src/components'
import { GoodAudienceCategoryType } from 'src/generated/graphql'
import { useGoods } from 'src/hooks'

export default function MenPage() {
  const { data, total } = useGoods({
    where: {
      audienceCategory: { equals: GoodAudienceCategoryType.Male },
    },
  })

  return (
    <Layout title="Мужская одежда">
      <GoodList goods={data ?? []} />
    </Layout>
  )
}
