import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { Close } from '@mui/icons-material'
import { IconButton, useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useUserContext } from 'src/context'
import { CartIcon, FavoriteIcon, UserIcon } from 'src/icons'
import { muiTheme } from 'src/theme'
import { Route } from 'src/utils'

import { Box } from './box'
import { Text } from './text'

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

const I = styled.i`
  display: block;
  background-color: black;
  margin: 4px 0;
  width: 25px;
  height: 4px;
  border-radius: 6px;
`

const BurgerContainer = styled.span`
  position: absolute;
  right: 15px;
  top: 15px;
`

const Menu = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  padding: 24px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`

const CloseIcon = styled(IconButton)`
  position: absolute;
  top: 2px;
  right: 0px;
`

export const Header = () => {
  const { pathname, push, beforePopState } = useRouter()
  const isMobile = useMediaQuery(muiTheme.breakpoints?.down?.('sm') ?? '')
  const { user, setIsAuthVisible } = useUserContext()
  const [visible, setVisible] = useState(false)
  const { colors } = useTheme()

  useEffect(() => {
    if (!isMobile) return
    beforePopState(() => {
      setIsAuthVisible(false)

      return true
    })
  }, [beforePopState, isMobile, setIsAuthVisible])

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

  const icons = useMemo(
    () => [
      {
        component: FavoriteIcon,
        onClick: onFavoriteClick,
        name: 'favorite',
        title: 'Избранное',
      },
      {
        component: CartIcon,
        onClick: onBasketClick,
        name: 'basket',
        title: 'Корзина',
      },
      {
        component: UserIcon,
        onClick: onUserClick,
        name: 'user',
        title: 'Профиль',
      },
    ],
    [onBasketClick, onFavoriteClick, onUserClick],
  )

  if (isMobile) {
    return (
      <>
        <BurgerContainer onClick={() => setVisible(true)}>
          <I />
          <I />
          <I />
        </BurgerContainer>
        {visible && (
          <Menu>
            <CloseIcon onClick={() => setVisible(false)}>
              <Close fontSize="large" color="primary" />
            </CloseIcon>
            {routes.map((item, i) => (
              <Link key={i} href={item.to}>
                <Text fontSize="18px" color="text_secondary">
                  {item.title}
                </Text>
              </Link>
            ))}
            {icons.map((item) => (
              <Box key={item.name} onClick={item.onClick}>
                <Text fontSize="18px" color="text_secondary">
                  {item.title}
                </Text>
              </Box>
            ))}
          </Menu>
        )}
      </>
    )
  }

  return (
    <Box
      display="flex"
      as="header"
      borderBottomWidth="1px"
      borderBottomColor="header_border"
      borderBottomStyle="solid"
      p="24px">
      <Box
        width="100%"
        display="flex"
        as="nav"
        justifyContent="space-between"
        alignItems="center">
        <Box width="120px" />
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
            <IconButton aria-label={item.name} key={i} onClick={item.onClick}>
              <item.component color={colors.icons.primary} />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
