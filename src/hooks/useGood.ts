import { useCallback, useEffect, useMemo, useState } from 'react'
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

  const [isInFavorite, setIsInFavorite] = useState(false)

  const [updateFavorite] = useFavoriteUpdateMutation()

  const [isInBasket, setIsInBasket] = useState(false)

  const [updateBasket] = useBasketUpdateMutation()

  const [getGood, { data, loading }] = useGoodLazyQuery()

  const getGoodById = useCallback(async () => {
    if (!id) return

    const { data: goodData } = await getGood({
      variables: { id },
    })

    setIsInBasket(goodData?.good?.isInBasket ?? false)
    setIsInFavorite(goodData?.good?.isInFavorite ?? false)
  }, [getGood, id])

  useEffect(() => {
    getGoodById()
  }, [getGoodById])

  const setValues = useCallback(() => {
    setIsInBasket(id ? false : !!inBasket)
    setIsInFavorite(id ? false : !!inFavorite)
  }, [id, inBasket, inFavorite])

  useEffect(() => {
    setIsInBasket(!!inBasket)
  }, [inBasket])

  useEffect(() => {
    setValues()
  }, [setValues])

  const handleUpdateBasket = useCallback(
    (goodId = '') => {
      if (!user) {
        return setIsAuthVisible(true)
      }

      setIsInBasket((prev) => {
        if (prev) {
          toast('Товар удален из корзины')
        } else {
          toast('Товар добавлен в корзину', { type: 'success' })
        }
        updateBasket({
          variables: {
            id: id ? id : goodId,
          },
        })

        return !prev
      })
    },
    [id, setIsAuthVisible, updateBasket, user],
  )

  const handleUpdateFavorite = useCallback(
    (goodId = '') => {
      if (!user) {
        return setIsAuthVisible(true)
      }
      setIsInFavorite((prev) => {
        updateFavorite({
          variables: {
            id: id ? id : goodId,
          },
        })

        return !prev
      })
    },
    [id, setIsAuthVisible, updateFavorite, user],
  )

  const value = useMemo(
    () => ({
      isInFavorite,
      isInBasket,
      handleUpdateFavorite,
      handleUpdateBasket,
      data,
      loading,
    }),
    [
      data,
      handleUpdateBasket,
      handleUpdateFavorite,
      isInBasket,
      isInFavorite,
      loading,
    ],
  )

  return value
}
