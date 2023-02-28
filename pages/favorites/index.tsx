import React from 'react'

import { GoodList, Layout } from 'src/components'
import { useUserContext } from 'src/context'
import { useFavoriteQuery } from 'src/generated'

export default function FavoritesPage() {
  const { user } = useUserContext()

  const { data } = useFavoriteQuery({
    variables: {
      where: {
        id: user?.favoritesId ?? '',
      },
    },
    fetchPolicy: 'cache-and-network',
  })

  return (
    <Layout title="Избранное">
      <GoodList goods={data?.favorite?.goods ?? []} />
    </Layout>
  )
}
