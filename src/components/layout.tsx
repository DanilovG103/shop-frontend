import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useBrandsQuery } from 'src/generated/graphql'
import { Route } from 'src/utils'

import { Box } from './box'
import { BrandsAside } from './brands-aside'
import { Text } from './text'

interface Props {
  title: string
  children: React.ReactNode
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

export const Layout = ({ title, children }: Props) => {
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
          <Box width={120} />
        </Box>
      </Box>
      <Box display="flex" p="32px">
        <BrandsAside />
        <Box width="100%" maxWidth={['1140px']}>
          <Text>{title}</Text>
          {children}
        </Box>
      </Box>
    </>
  )
}
