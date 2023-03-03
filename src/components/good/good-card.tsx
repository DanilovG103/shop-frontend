import { MouseEventHandler, useCallback } from 'react'
import styled from '@emotion/styled'
import { Card, IconButton, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import { GoodsFragment } from 'src/generated/graphql'
import { useGood } from 'src/hooks'
import { FavoriteIcon } from 'src/icons'
import { env } from 'src/utils'

import { Box } from '../box'
import { Text } from '../text'

const IconWrapper = styled(IconButton)`
  background-color: rgba(0, 0, 0, 0.2) !important;
  padding: 8px !important;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4) !important;
  }
`

const ImageWrapper = styled(Box)`
  position: relative;
`

const Img = styled(Image)`
  border-radius: 4px;
`

const IconsBox = styled(Box)`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 6px;
`

interface Props {
  good: GoodsFragment
  displayType?: 'default' | 'basket'
}

export const Good = ({ good, displayType = 'default' }: Props) => {
  const { isInFavorite, handleUpdateFavorite } = useGood({
    inFavorite: good.isInFavorite,
    inBasket: good.isInBasket,
  })

  const { colors } = useTheme()

  const isDefault = displayType === 'default'

  const onFavoriteClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault()

      handleUpdateFavorite(good.id)
    },
    [good.id, handleUpdateFavorite],
  )

  const firstImage = good.images?.[0]?.image

  const imageUri = firstImage ? env.image + firstImage.url : ''

  const containerDirection = isDefault ? 'column' : 'row'

  const textContentMargin = isDefault ? '0' : '32px'

  return (
    <Link href={`/good/${good.id}`}>
      <Card>
        <Box p="16px" display="flex" flexDirection={containerDirection}>
          <ImageWrapper>
            <Img src={imageUri} alt={'image'} width={200} height={200} />
            {displayType === 'default' && (
              <IconsBox>
                <IconWrapper onClick={onFavoriteClick}>
                  <FavoriteIcon
                    color={colors.icons.favorite}
                    active={isInFavorite}
                  />
                </IconWrapper>
              </IconsBox>
            )}
          </ImageWrapper>
          <Box ml={textContentMargin}>
            <Text>{good.title}</Text>
            <Text>{good.brand?.title}</Text>
            <Text>{good.price?.toLocaleString('ru-RU') + ' ₽'}</Text>
          </Box>
        </Box>
      </Card>
    </Link>
  )
}
