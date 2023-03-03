import { useRouter } from 'next/router'

import { Layout } from 'src/components'
import { useRequestByIdQuery } from 'src/generated'

export default function RequestPage() {
  const { query } = useRouter()
  const { data } = useRequestByIdQuery({
    variables: {
      id: query.id?.toString() ?? '',
    },
  })

  return (
    <Layout
      title={`Заказ №${query.id ?? ''}`}
      withAside={false}
      >
      <div />
    </Layout>
  )
}
