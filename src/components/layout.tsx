import React from 'react'
import { IconButton } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Route } from 'src/utils'

import { Box } from './box'
import { BrandsAside } from './brands-aside'
import { Text } from './text'

interface Props {
  title: string
  children: React.ReactNode
  withBrands?: boolean
}

const routes = [
  {
    title: 'Новое',
    to: Route.main,
  },
  {
    title: 'Для мужчин',
    to: Route.men,
  },
  {
    title: 'Для женщин',
    to: Route.women,
  },
  {
    title: 'Для детей',
    to: Route.kids,
  },
]

const Links = styled.ul`
  display: flex;
  max-width: 400px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Layout = ({ title, children, withBrands = true }: Props) => {
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        display="flex"
        as="header"
        borderBottomWidth="1px"
        borderBottomColor="header_border"
        borderBottomStyle="solid"
        py="24px"
        bg="bg_primary">
        <Box
          width="100%"
          display="flex"
          as="nav"
          justifyContent="space-between"
          alignItems="center">
          <Box width={120} />
          <Links>
            {routes.map((route, i) => (
              <li key={i}>
                <Link href={route.to}>
                  <Text color="text_primary">{route.title}</Text>
                </Link>
                {route.to === pathname && (
                  <Box bg="text_primary" width="100%" height="1px" />
                )}
              </li>
            ))}
          </Links>
          <Box width={120}>
            <Link href={Route.basket}>
              <IconButton>
                <Image src="cart.svg" width={24} height={24} alt="cart" />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box display="flex" p="32px">
        {withBrands && <BrandsAside />}
        <Box width="100%" maxWidth={['1140px']}>
          <Text>{title}</Text>
          {children}
        </Box>
      </Box>
    </>
  )
}
