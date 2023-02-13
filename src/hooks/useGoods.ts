import { useFilterContext } from 'src/context'
import {
  GoodsQueryVariables,
  useGoodsCountQuery,
  useGoodsQuery,
} from 'src/generated/graphql'

export const useGoods = ({ orderBy, where }: GoodsQueryVariables) => {
  const { brandsIds } = useFilterContext()

  const whereInput = {
    brand: brandsIds.length ? { id: { in: brandsIds } } : undefined,
    ...where,
  }

  const { data, loading, fetchMore } = useGoodsQuery({
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

  return {
    data: data?.goods,
    loading,
    total: countData?.goodsCount,
    fetchMore,
  }
}
