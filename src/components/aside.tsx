import React, { useMemo } from 'react'
import {
  ListItemText,
  MenuItem,
  Select as MUISelect,
  styled,
  useMediaQuery,
} from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

import { useFilterContext } from 'src/context'
import { useBrandsQuery, useCategoriesQuery } from 'src/generated/graphql'
import { muiTheme } from 'src/theme'

import { Accordion } from './accordion'
import { Box } from './box'
import { Text } from './text'

const transformState = (el: { id: string; title?: string }) => ({
  id: el.id,
  title: el.title ?? '',
})

const Select = styled(MUISelect<string[]>)(() => ({
  maxWidth: '150px',
  width: '100%',
}))

export const Aside = () => {
  const { data: brands } = useBrandsQuery()
  const isMobile = useMediaQuery(muiTheme.breakpoints?.down?.('md') ?? '')

  const {
    brands: selectedBrands,
    setBrands,
    categories: selectedCategories,
    setCategories,
  } = useFilterContext()
  const { data: categories } = useCategoriesQuery()

  const sections = useMemo(
    () => [
      {
        data: categories?.categories,
        title: 'Категории',
        onClick: setCategories,
        values: selectedCategories,
      },
      {
        data: brands?.brands,
        title: 'Бренды',
        onClick: setBrands,
        values: selectedBrands,
      },
    ],
    [
      brands?.brands,
      categories?.categories,
      selectedBrands,
      selectedCategories,
      setBrands,
      setCategories,
    ],
  )

  return (
    <Box
      display="flex"
      flexDirection={{ sm: 'row', md: 'column', xl: 'column' }}
      maxWidth={{ sm: 'none', lg: '320px' }}
      width="100%"
      alignItems="center"
      as="aside"
      px="16px">
      {isMobile
        ? sections.map((item, i) => (
            <Box ml={!i ? '0px' : '8px'} key={i}>
              <Select
                value={item.values.map((val) => val.title)}
                displayEmpty
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <Text>{item.title}</Text>
                  }

                  return selected.join(', ')
                }}
                multiple>
                {item.data?.map((el) => (
                  <MenuItem
                    key={el.id}
                    onClick={() => item.onClick(transformState(el))}>
                    <Checkbox
                      color="primary"
                      checked={!!item.values.find((val) => val.id === el.id)}
                    />
                    <ListItemText>{el.title}</ListItemText>
                  </MenuItem>
                ))}
              </Select>
            </Box>
          ))
        : sections.map((item, i) => (
            <Accordion key={i} title={item.title}>
              {item.data?.map((el) => (
                <Box key={el.id} alignItems="center" display="flex">
                  <Checkbox
                    onClick={() => item.onClick(transformState(el))}
                    color="primary"
                    checked={!!item.values.find((val) => val.id === el.id)}
                  />
                  <Text>{el.title}</Text>
                </Box>
              ))}
            </Accordion>
          ))}
    </Box>
  )
}
