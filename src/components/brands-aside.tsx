import React from 'react'
import { Checkbox } from '@material-ui/core'

import { useFilterContext } from 'src/context'
import { useBrandsQuery } from 'src/generated/graphql'

import { Box } from './box'
import { Text } from './text'

export const BrandsAside = () => {
  const { data: brands, loading: brandsLoading } = useBrandsQuery()
  const { brandsIds, setBrandsIds } = useFilterContext()

  return (
    <Box maxWidth="400px" width="100%" as="aside" px="16px">
      <Text>Brand</Text>
      {brands?.brands?.map((item) => (
        <Box key={item.id} alignItems="center" display="flex">
          <Checkbox
            onClick={() => setBrandsIds(item.id)}
            color="primary"
            checked={brandsIds.includes(item.id)}
          />
          <Text>{item.title}</Text>
        </Box>
      ))}
    </Box>
  )
}
