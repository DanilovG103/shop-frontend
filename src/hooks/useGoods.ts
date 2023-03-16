import { useCallback, useMemo } from 'react'

import { useFilterContext } from 'src/context'
import {
  GoodsQueryVariables,
  useGoodsCountQuery,
  useGoodsQuery,
} from 'src/generated'

interface Value {
  id: string
}

const mapToIds = (array: Value[]) => {
  return array.map((el) => el.id)
}

export const useGoods = ({ orderBy, where }: GoodsQueryVariables) => {
  const { brands, categories } = useFilterContext()
  const whereInput: GoodsQueryVariables['where'] = useMemo(
    () => ({
      brand: brands.length ? { id: { in: mapToIds(brands) } } : undefined,
      category: categories.length
        ? { id: { in: mapToIds(categories) } }
        : undefined,
      ...where,
    }),
    [brands, categories, where],
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

  const fetchMore = useCallback(async () => {
    if (!data?.goods || !countData?.goodsCount) return
    if (data.goods.length === countData.goodsCount && loading) return
    await loadMore({
      variables: {
        take: 12,
        skip: data.goods.length,
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
  }, [countData?.goodsCount, data?.goods, loadMore, loading, whereInput])

  return {
    data: data?.goods,
    loading,
    total: countData?.goodsCount,
    fetchMore,
  }
}
