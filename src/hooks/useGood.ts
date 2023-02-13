import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useUserContext } from 'src/context'
import {
  useBasketUpdateMutation,
  useFavoriteUpdateMutation,
  useGoodLazyQuery,
} from 'src/generated/graphql'

interface Props {
  id?: string
  inFavorite?: boolean
  inBasket?: boolean
}

export const useGood = ({ id, inFavorite, inBasket }: Props) => {
  const { user, setIsAuthVisible } = useUserContext()
  const [isInFavorite, setIsInFavorite] = useState(() => {
    if (!id) {
      return !!inFavorite
    }

    return false
  })

  const [updateFavorite] = useFavoriteUpdateMutation()

  const [isInBasket, setIsInBasket] = useState(() => {
    if (id) {
      return !!inBasket
    }

    return false
  })
  const [updateBasket] = useBasketUpdateMutation()

  const [getGood, { data, loading }] = useGoodLazyQuery()

  const getGoodById = useCallback(async () => {
    if (!id) return

    const { data: goodData } = await getGood({ variables: { id } })

    setIsInBasket(goodData?.good?.isInBasket ?? false)
    setIsInFavorite(goodData?.good?.isInFavorite ?? false)
  }, [getGood, id])

  useEffect(() => {
    getGoodById()
  }, [getGoodById])

  const handleUpdateBasket = useCallback(
    (goodId?: string) => {
      if (!user) {
        return setIsAuthVisible(true)
      }

      setIsInBasket((prev) => {
        const option = prev ? 'disconnect' : 'connect'

        if (prev) {
          toast('Товар удален из корзины')
        } else {
          toast('Товар добавлен в корзину', { type: 'success' })
        }
        updateBasket({
          variables: {
            where: {
              id: user.basketId,
            },
            data: {
              goods: {
                [option]: [{ id: id ? id : goodId }],
              },
            },
          },
        })

        return !prev
      })
    },
    [id, setIsAuthVisible, updateBasket, user],
  )

  const handleUpdateFavorite = useCallback(
    (goodId?: string) => {
      if (!user) {
        return setIsAuthVisible(true)
      }
      setIsInFavorite((prev) => {
        const option = prev ? 'disconnect' : 'connect'
        updateFavorite({
          variables: {
            where: {
              id: user.favoritesId,
            },
            data: {
              goods: {
                [option]: [{ id: id ? id : goodId }],
              },
            },
          },
        })

        return !prev
      })
    },
    [id, setIsAuthVisible, updateFavorite, user],
  )

  return {
    isInFavorite,
    isInBasket,
    handleUpdateFavorite,
    handleUpdateBasket,
    data,
    loading,
  }
}
