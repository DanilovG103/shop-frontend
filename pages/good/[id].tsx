import { MouseEventHandler, useCallback } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Button, CircularProgress } from '@material-ui/core'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Box, Layout, Text } from 'src/components'
import { useGoodQuery } from 'src/generated/graphql'
import { useGood } from 'src/hooks'
import { CartIcon, FavoriteIcon } from 'src/icons'
import { env } from 'src/utils'

export default function CurrentGoodPage() {
  const { query } = useRouter()

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

  return (
    <Layout
      withTitle={false}
      withBrands={false}
      title={data?.good?.title ?? ''}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box display="flex">
          <Carousel timeout={350} autoPlay={false}>
            {data?.good?.images?.map((item) => (
              <Image
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
              startIcon={<FavoriteIcon active={isInFavorite} />}>
              Добавить в избранное
            </Button>
            <Button startIcon={<CartIcon />}>Добавить в корзину</Button>
          </Box>
        </Box>
      )}
    </Layout>
  )
}
