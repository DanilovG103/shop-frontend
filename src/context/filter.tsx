import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

interface Values {
  brandsIds: string[]
  setBrandsIds(val: string): void
  categoryIds: string[]
  setCategoriesIds(val: string): void
}

const initialValues: Values = {
  brandsIds: [],
  setBrandsIds: noop,
  categoryIds: [],
  setCategoriesIds: noop,
}

const Context = createContext(initialValues)

interface Props {
  children: ReactNode
}

export const FilterProvider = ({ children }: Props) => {
  const [brandsIds, setIds] = useState<string[]>([])
  const [categoryIds, setCIds] = useState<string[]>([])

  const setCategoriesIds = useCallback((val: string) => {
    setCIds((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val],
    )
  }, [])

  const setBrandsIds = useCallback((val: string) => {
    setIds((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val],
    )
  }, [])

  const value = useMemo(
    () => ({
      brandsIds,
      setBrandsIds,
      categoryIds,
      setCategoriesIds,
    }),
    [brandsIds, categoryIds, setBrandsIds, setCategoriesIds],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useFilterContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error(
      'useFilterContext can not be used outside of FilterProvider',
    )
  }

  return context
}
