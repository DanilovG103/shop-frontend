import Image from 'next/image'
import { useRouter } from 'next/router'

import { Box, Text } from 'src/components'
import { useGoodQuery } from 'src/generated/graphql'
import { env } from 'src/utils'

export default function CurrentGoodPage() {
  const { query } = useRouter()
  const { data } = useGoodQuery({
    variables: { id: query.id?.toString() ?? '' },
  })

  return (
    <Box display="flex">
      {data?.good?.images?.map((item) => (
        <Image
          key={item.image?.id}
          src={env.image + item.image?.url ?? ''}
          alt="image"
          width={250}
          height={250}
        />
      ))}
      <Box>
        <Text>{data?.good?.title}</Text>
        <Text>{data?.good?.description}</Text>
      </Box>
    </Box>
  )
}
