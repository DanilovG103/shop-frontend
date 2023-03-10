import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

import { useMeLazyQuery, User } from 'src/generated/graphql'

type MaybeUser = User | null

interface Values {
  user: MaybeUser
  setUser: Dispatch<SetStateAction<MaybeUser>>
  isAuthVisible: boolean
  setIsAuthVisible: Dispatch<SetStateAction<boolean>>
}

const initialValues: Values = {
  user: null,
  setUser: noop,
  isAuthVisible: false,
  setIsAuthVisible: noop,
}

const Context = createContext(initialValues)

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [getMeQuery] = useMeLazyQuery()
  const [isAuthVisible, setIsAuthVisible] = useState(false)
  const [user, setUser] = useState<MaybeUser>(null)

  const getMe = useCallback(async () => {
    const { data } = await getMeQuery()
    if (!data?.authenticatedItem) return

    setUser(data.authenticatedItem)
  }, [getMeQuery])

  useEffect(() => {
    getMe()
  }, [getMe])

  const value = useMemo(
    () => ({
      user,
      setUser,
      isAuthVisible,
      setIsAuthVisible,
    }),
    [isAuthVisible, user],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useUserContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useUserContext can not be used outside of UserProvider')
  }

  return context
}
