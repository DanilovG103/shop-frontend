import { Card, makeStyles } from '@material-ui/core'
import Image from 'next/image'

import type { Good as GoodType } from 'src/generated/graphql'

import { Text } from '.'

const useStyles = makeStyles({
  card: {
    padding: '16px',
  },
})

interface Props {
  good: GoodType
}

export const Good = ({ good }: Props) => {
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <Image
        src={good.images?.[0]?.image?.url ?? 'render thumbnail here'}
        alt={'image'}
        width={150}
        height={150}
      />
      <Text>{good.title}</Text>
      <Text>{good?.brand?.title}</Text>
      <Text>{good?.price?.toLocaleString('ru-RU')}</Text>
    </Card>
  )
}
