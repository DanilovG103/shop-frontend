import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { MouseEventHandler, useCallback } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from '@emotion/styled'
import { Button, CircularProgress, useTheme } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Box, Layout, Text } from 'src/components'
import { useGood } from 'src/hooks'
import { CartIcon, FavoriteIcon } from 'src/icons'
import { env } from 'src/utils'

const Img = styled(Image)`
  object-fit: cover;
`

export default function CurrentGoodPage() {
  const { query } = useRouter()
  const { colors } = useTheme()
  const {
    isInBasket,
    isInFavorite,
    handleUpdateBasket,
    handleUpdateFavorite,
    data,
    loading,
  } = useGood({ id: query.id?.toString() })

  const updateFavorite: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault()
      handleUpdateFavorite()
    },
    [handleUpdateFavorite],
  )

  const updateBasket: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault()
      handleUpdateBasket()
    },
    [handleUpdateBasket],
  )

  return (
    <Layout withAside={false} title={data?.good?.title ?? ''}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box display="flex" flexDirection={{ sm: 'column', xl: 'row' }}>
          <Carousel width={600} showStatus={false}>
            {data?.good?.images?.map((item) => (
              <Img
                key={item.image?.id}
                src={env.image + item.image?.url ?? ''}
                alt="image"
                width={600}
                height={450}
              />
            ))}
          </Carousel>
          <Box ml="20px">
            <Text>{data?.good?.title}</Text>
            <Text>{data?.good?.description}</Text>
            <Button
              onClick={updateFavorite}
              startIcon={
                <FavoriteIcon
                  color={colors.icons.favorite}
                  active={isInFavorite}
                />
              }>
              {!isInFavorite ? 'Добавить в избранное' : 'Удалить из избранного'}
            </Button>
            <Button onClick={updateBasket} startIcon={<CartIcon />}>
              {!isInBasket ? 'Добавить в корзину' : 'Удалить из корзины'}
            </Button>
          </Box>
        </Box>
      )}
    </Layout>
  )
}
