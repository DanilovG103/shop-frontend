import React from 'react'
import Head from 'next/head'

import { useUserContext } from 'src/context'

import { Aside } from './aside'
import { AuthModal } from './auth-modal'
import { Box } from './box'
import { Header } from './header'

interface Props {
  title: string
  children: React.ReactNode
  withAside?: boolean
}

export const Layout = ({ title, children, withAside = true }: Props) => {
  const { isAuthVisible, setIsAuthVisible } = useUserContext()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Box
        display="flex"
        mt={{ xs: '20px', sm: '0px' }}
        flexDirection={{ xs: 'column', md: 'row', xl: 'row' }}
        p="32px">
        {withAside && <Aside />}
        <Box
          mt={{ xs: '20px', md: '0px' }}
          pl={withAside ? '12px' : '0'}
          width="100%"
          maxWidth={'1440px'}>
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
