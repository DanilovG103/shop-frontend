import React, { useCallback, useState } from 'react'
import { IconButton } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { useTheme } from 'styled-components'

import { useUserContext } from 'src/context'
import { CartIcon, UserIcon } from 'src/icons'
import { Route } from 'src/utils'

import { AuthModal } from './auth-modal'
import { Box } from './box'
import { BrandsAside } from './brands-aside'
import { Text } from './text'

interface Props {
  title: string
  children: React.ReactNode
  withBrands?: boolean
  withTitle?: boolean
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

export const Layout = ({
  title,
  children,
  withBrands = true,
  withTitle = true,
}: Props) => {
  const { user, isAuthVisible, setIsAuthVisible } = useUserContext()
  const { pathname, push } = useRouter()
  const { colors } = useTheme()

  const onCartPress = useCallback(() => {
    if (!user) {
      return setIsAuthVisible(true)
    }

    return push(Route.basket)
  }, [push, setIsAuthVisible, user])

  const onUserPress = useCallback(() => {
    if (!user) {
      return setIsAuthVisible(true)
    }

    return push(Route.me)
  }, [push, setIsAuthVisible, user])

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
              <Link key={i} href={route.to}>
                <Text as="li" color="text_primary">
                  {route.title}
                </Text>
                {route.to === pathname && (
                  <Box bg="text_primary" width="100%" height="1px" />
                )}
              </Link>
            ))}
          </Links>
          <Box width={120}>
            <IconButton onClick={onCartPress}>
              <CartIcon color={colors.icons.primary} />
            </IconButton>
            <IconButton onClick={onUserPress}>
              <UserIcon color={colors.icons.primary} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box display="flex" p="32px">
        {withBrands && <BrandsAside />}
        <Box width="100%" maxWidth={['1140px']}>
          {withTitle && <Text>{title}</Text>}
          {children}
        </Box>
      </Box>
      <AuthModal open={isAuthVisible} onClose={() => setIsAuthVisible(false)} />
    </>
  )
}
