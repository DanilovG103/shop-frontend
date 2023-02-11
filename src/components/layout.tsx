import React, { useCallback, useState } from 'react'
import { IconButton } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useUserContext } from 'src/context'
import { Route } from 'src/utils'

import { AuthModal } from './auth-modal'
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
  const { user } = useUserContext()
  const { pathname, push } = useRouter()
  const [isAuthVisible, setIsAuthVisible] = useState(false)

  const onUserPress = useCallback(() => {
    if (!user) {
      return setIsAuthVisible(true)
    }

    return push(Route.me)
  }, [push, user])

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
            <IconButton>
              <Image src="cart.svg" width={24} height={24} alt="cart" />
            </IconButton>
            <IconButton onClick={onUserPress}>
              <Image src="user.svg" width={24} height={24} alt="cart" />
            </IconButton>
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
      <AuthModal open={isAuthVisible} onClose={() => setIsAuthVisible(false)} />
    </>
  )
}
