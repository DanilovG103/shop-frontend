import { MouseEventHandler, useCallback } from 'react'
import { Card, IconButton, makeStyles } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import { GoodsFragment } from 'src/generated/graphql'
import { useGood } from 'src/hooks'
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

const Img = styled(Image)`
  border-radius: 4px;
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
  const { isInFavorite, handleUpdateFavorite, handleUpdateBasket } = useGood({
    inFavorite: good.isInFavorite,
    inBasket: good.isInBasket,
  })

  const onCartClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault()

      handleUpdateBasket(good.id)
    },
    [good.id, handleUpdateBasket],
  )

  const onFavoriteClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault()

      handleUpdateFavorite(good.id)
    },
    [good.id, handleUpdateFavorite],
  )

  const firstImage = good.images?.[0]?.image

  const imageUri = firstImage ? env.image + firstImage.url : ''

  return (
    <Link href={`/good/${good.id}`}>
      <Card className={styles.card}>
        <ImageWrapper>
          <Img src={imageUri} alt={'image'} width={200} height={200} />
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
