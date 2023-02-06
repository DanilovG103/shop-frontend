import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

import type { GoodsFragment } from 'src/generated/graphql'

interface Values {
  goods: GoodsFragment[]
  setGoods: Dispatch<SetStateAction<GoodsFragment[]>>
}

const initialValues: Values = {
  goods: [],
  setGoods: noop,
}

const Context = createContext(initialValues)

interface Props {
  children: ReactNode
}

export const BasketProvider = ({ children }: Props) => {
  const [goods, setGoods] = useState<GoodsFragment[]>([])

  const value = useMemo(
    () => ({
      goods,
      setGoods,
    }),
    [goods],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useBasketContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error(
      'useBasketContext can not be used outside of BasketProvider',
    )
  }

  return context
}
