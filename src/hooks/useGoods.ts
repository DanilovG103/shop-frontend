import { useCallback, useMemo } from 'react'

import { useFilterContext } from 'src/context'
import {
  GoodsQueryVariables,
  useGoodsCountQuery,
  useGoodsQuery,
} from 'src/generated'

export const useGoods = ({ orderBy, where }: GoodsQueryVariables) => {
  const { brandsIds, categoryIds } = useFilterContext()

  const whereInput: GoodsQueryVariables['where'] = useMemo(
    () => ({
      brand: brandsIds.length ? { id: { in: brandsIds } } : undefined,
      category: categoryIds.length ? { id: { in: categoryIds } } : undefined,
      ...where,
    }),
    [brandsIds, categoryIds, where],
  )

  const {
    data,
    loading,
    fetchMore: loadMore,
  } = useGoodsQuery({
    variables: {
      take: 12,
      skip: 0,
      orderBy,
      where: whereInput,
    },
  })

  const { data: countData } = useGoodsCountQuery({
    variables: {
      where: whereInput,
    },
  })

  const fetchMore = useCallback(
    async (skip: number) => {
      await loadMore({
        variables: {
          take: 12,
          skip,
          where: whereInput,
        },
        updateQuery(previousQueryResult, { fetchMoreResult }) {
          return {
            goods: [
              ...(previousQueryResult?.goods ?? []),
              ...(fetchMoreResult?.goods ?? []),
            ],
          }
        },
      })
    },
    [loadMore, whereInput],
  )

  return {
    data: data?.goods,
    loading,
    total: countData?.goodsCount,
    fetchMore,
  }
}
