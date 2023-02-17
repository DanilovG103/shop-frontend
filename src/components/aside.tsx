import React, { useMemo } from 'react'
import Checkbox from '@material-ui/core/Checkbox'

import { useFilterContext } from 'src/context'
import { useBrandsQuery, useCategoriesQuery } from 'src/generated/graphql'

import { Accordion } from './accordion'
import { Box } from './box'
import { Text } from './text'

export const Aside = () => {
  const { data: brands } = useBrandsQuery()

  const { brandsIds, setBrandsIds, categoryIds, setCategoriesIds } =
    useFilterContext()
  const { data: categories } = useCategoriesQuery()

  const sections = useMemo(
    () => [
      {
        data: categories?.categories,
        title: 'Категории',
        onClick: setCategoriesIds,
        values: categoryIds,
      },
      {
        data: brands?.brands,
        title: 'Бренды',
        onClick: setBrandsIds,
        values: brandsIds,
      },
    ],
    [
      brands?.brands,
      brandsIds,
      categories?.categories,
      categoryIds,
      setBrandsIds,
      setCategoriesIds,
    ],
  )

  return (
    <Box maxWidth="320px" width="100%" as="aside" px="16px">
      {sections.map((item, i) => (
        <Accordion key={i} title={item.title}>
          {item.data?.map((el) => (
            <Box key={el.id} alignItems="center" display="flex">
              <Checkbox
                onClick={() => item.onClick(el.id)}
                color="primary"
                checked={item.values.includes(el.id)}
              />
              <Text>{el.title}</Text>
            </Box>
          ))}
        </Accordion>
      ))}
    </Box>
  )
}
