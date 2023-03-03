import React, { useMemo } from 'react'
import { useMediaQuery } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

import { useFilterContext } from 'src/context'
import { useBrandsQuery, useCategoriesQuery } from 'src/generated/graphql'
import { muiTheme } from 'src/theme'

import { Accordion } from './accordion'
import { Box } from './box'
import { Text } from './text'

export const Aside = () => {
  const { data: brands } = useBrandsQuery()
  const isMobile = useMediaQuery(muiTheme.breakpoints?.down?.('sm') ?? '')

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
    <Box
      display="flex"
      flexDirection={{ sm: 'row', xl: 'column' }}
      maxWidth={{ sm: 'none', lg: '320px' }}
      width="100%"
      alignItems="center"
      as="aside"
      px="16px">
      {isMobile ? (
        <></>
      ) : (
        // sections.map((item, i) => (
        //     <Box key={i}>
        //       <Text>{item.title}</Text>
        //       <Select multiple>
        //         {item.data?.map((el) => (
        //           <MenuItem key={el.id}>
        //             <Checkbox
        //               color="primary"
        //               checked={item.values.includes(el.id)}
        //             />
        //             <ListItemText>{el.title}</ListItemText>
        //           </MenuItem>
        //         ))}
        //       </Select>
        //     </Box>
        //   ))
        sections.map((item, i) => (
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
        ))
      )}
    </Box>
  )
}
