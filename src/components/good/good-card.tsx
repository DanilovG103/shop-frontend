import { useCallback } from 'react'
import { Card, IconButton, makeStyles } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import type { GoodsFragment } from 'src/generated/graphql'
import { env } from 'src/utils'

import { Box } from '../box'
import { Text } from '../text'

const useStyles = makeStyles({
  card: {
    padding: '16px',
  },
})

interface Props {
  good: GoodsFragment
}

export const Good = ({ good }: Props) => {
  const styles = useStyles()

  const onCartClick = useCallback((value: GoodsFragment) => {
    // setGoods((prev) =>
    //   prev.includes(value)
    //     ? prev.filter((item) => item.id !== value.id)
    //     : [...prev, value],
    // )
  }, [])

  const firstImage = good.images?.[0]?.image

  const imageUri = firstImage ? env.image + firstImage.url : ''

  return (
    <Link href={`/good/${good.id}`}>
      <Card className={styles.card}>
        <Image src={imageUri} alt={'image'} width={200} height={200} />
        <Text>{good.title}</Text>
        <Text>{good.brand?.title}</Text>
        <Text>{good.price?.toLocaleString('ru-RU') + ' ₽'}</Text>
        <Box>
          <IconButton
            aria-label="add to cart"
            onClick={(event) => {
              event.preventDefault()
              onCartClick(good)
            }}>
            <Image src="cart.svg" alt="cart" width={24} height={24} />
          </IconButton>
        </Box>
      </Card>
    </Link>
  )
}
