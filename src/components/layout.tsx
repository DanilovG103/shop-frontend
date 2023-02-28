import React, { useCallback, useEffect, useMemo } from 'react'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useUserContext } from 'src/context'
import { CartIcon, FavoriteIcon, UserIcon } from 'src/icons'
import { muiTheme } from 'src/theme'
import { Route } from 'src/utils'

import { Aside } from './aside'
import { AuthModal } from './auth-modal'
import { Box } from './box'
import { Text } from './text'

interface Props {
  title: string
  children: React.ReactNode
  withAside?: boolean
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
  withAside = true,
  withTitle = true,
}: Props) => {
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'))
  const { user, isAuthVisible, setIsAuthVisible } = useUserContext()
  const { pathname, push, beforePopState } = useRouter()
  const { colors } = useTheme()

  const onIconPress = useCallback(
    (route: string) => {
      if (!user) {
        if (isMobile) {
          push(pathname, 'auth')
        }

        return setIsAuthVisible(true)
      }

      return push(route)
    },
    [isMobile, pathname, push, setIsAuthVisible, user],
  )

  const onBasketClick = useCallback(() => {
    onIconPress(Route.basket)
  }, [onIconPress])

  const onUserClick = useCallback(() => {
    onIconPress(Route.me)
  }, [onIconPress])

  const onFavoriteClick = useCallback(() => {
    onIconPress(Route.favorites)
  }, [onIconPress])

  useEffect(() => {
    if (!isMobile) return
    beforePopState(() => {
      setIsAuthVisible(false)

      return true
    })
  }, [beforePopState, isMobile, setIsAuthVisible])

  const icons = useMemo(
    () => [
      {
        component: FavoriteIcon,
        onClick: onFavoriteClick,
      },
      {
        component: CartIcon,
        onClick: onBasketClick,
      },
      {
        component: UserIcon,
        onClick: onUserClick,
      },
    ],
    [onBasketClick, onFavoriteClick, onUserClick],
  )

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
        p="24px"
        bg={['green', 'red', 'bg_primary']}>
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
          <Box>
            {icons.map((item, i) => (
              <IconButton key={i} onClick={item.onClick}>
                <item.component color={colors.icons.primary} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection={['column', 'column', 'row']} p="32px">
        {withAside && <Aside />}
        <Box
          m="0 auto"
          pl={withAside ? '12px' : '0'}
          width="100%"
          maxWidth={['1140px']}>
          {withTitle && <Text>{title}</Text>}
          {children}
        </Box>
      </Box>
      {isAuthVisible && (
        <AuthModal
          open={isAuthVisible}
          onClose={() => setIsAuthVisible(false)}
        />
      )}
    </>
  )
}
