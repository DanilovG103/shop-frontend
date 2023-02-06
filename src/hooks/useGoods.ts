import { useFilterContext } from 'src/context'
import {
  GoodsQueryVariables,
  useGoodsCountQuery,
  useGoodsQuery,
} from 'src/generated/graphql'

export const useGoods = ({ orderBy, where }: GoodsQueryVariables) => {
  const { brandsIds } = useFilterContext()
  const { data, loading, fetchMore } = useGoodsQuery({
    variables: {
      take: 10,
      skip: 0,
      orderBy,
      where: {
        brand: brandsIds.length ? { id: { in: brandsIds } } : undefined,
        ...where,
      },
    },
  })
  const { data: countData } = useGoodsCountQuery()

  return {
    data: data?.goods,
    loading,
    total: countData,
    fetchMore,
  }
}
