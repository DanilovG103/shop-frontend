import {
  GoodOrderByInput,
  GoodsQueryVariables,
  useGoodsCountQuery,
  useGoodsQuery,
} from 'src/generated/graphql'

export const useGoods = ({ orderBy, where }: GoodsQueryVariables) => {
  const { data, loading, fetchMore } = useGoodsQuery({
    variables: {
      take: 10,
      skip: 0,
      orderBy,
      where,
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
