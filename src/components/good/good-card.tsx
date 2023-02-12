import { MouseEventHandler, useCallback, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { Card, IconButton, makeStyles } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { useUserContext } from 'src/context'
import {
  GoodsFragment,
  useBasketUpdateMutation,
  useFavoriteUpdateMutation,
} from 'src/generated/graphql'
import { CartIcon, FavoriteIcon } from 'src/icons'
import { env } from 'src/utils'

import { Box } from '../box'
import { Text } from '../text'

const useStyles = makeStyles({
  card: {
    padding: '16px',
  },
  icon: {
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '8px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  },
})

const ImageWrapper = styled(Box)`
  position: relative;
`

const IconsBox = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  right: 0px;
  top: 0px;
  height: 200px;
  padding: 6px;
`

interface Props {
  good: GoodsFragment
}

export const Good = ({ good }: Props) => {
  const styles = useStyles()
  const { user, setIsAuthVisible } = useUserContext()
  const [updateFavorite] = useFavoriteUpdateMutation()
  const [updateBasket] = useBasketUpdateMutation()

  const [isInFavorite, setIsInFavorite] = useState(good.isInFavorite ?? false)
  const isInBasket = useRef(good.isInBasket ?? false)

  const onCartClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault()

      if (!user) {
        return setIsAuthVisible(true)
      }

      const option = isInBasket.current ? 'disconnect' : 'connect'

      if (isInBasket.current) {
        toast('Товар удален из корзины')
      } else {
        toast('Товар добавлен в корзину', { type: 'success' })
      }

      isInBasket.current = !isInBasket.current

      updateBasket({
        variables: {
          where: {
            id: user.basketId,
          },
          data: {
            goods: {
              [option]: [{ id: good.id }],
            },
          },
        },
      })
    },
    [good.id, setIsAuthVisible, updateBasket, user],
  )

  const onFavoriteClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault()

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
                [option]: [{ id: good.id }],
              },
            },
          },
        })

        return !prev
      })
    },
    [good.id, setIsAuthVisible, updateFavorite, user],
  )

  const firstImage = good.images?.[0]?.image

  const imageUri = firstImage ? env.image + firstImage.url : ''

  return (
    <Link href={`/good/${good.id}`}>
      <Card className={styles.card}>
        <ImageWrapper>
          <Image src={imageUri} alt={'image'} width={200} height={200} />
          <IconsBox>
            <IconButton className={styles.icon} onClick={onFavoriteClick}>
              <FavoriteIcon active={isInFavorite} />
            </IconButton>
            <IconButton className={styles.icon} onClick={onCartClick}>
              <CartIcon />
            </IconButton>
          </IconsBox>
        </ImageWrapper>
        <Text>{good.title}</Text>
        <Text>{good.brand?.title}</Text>
        <Text>{good.price?.toLocaleString('ru-RU') + ' ₽'}</Text>
      </Card>
    </Link>
  )
}
