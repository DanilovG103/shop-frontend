import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'

interface State {
  id: string
  title: string
}

interface Values {
  brands: State[]
  setBrands(val: State): void
  categories: State[]
  setCategories(val: State): void
}

const initialValues: Values = {
  brands: [],
  setBrands: noop,
  categories: [],
  setCategories: noop,
}

const Context = createContext(initialValues)

interface Props {
  children: ReactNode
}

export const FilterProvider = ({ children }: Props) => {
  const [brands, _setBrands] = useState<State[]>([])
  const [categories, _setCategories] = useState<State[]>([])

  const setCategories = useCallback((val: State) => {
    _setCategories((prev) => {
      const element = prev.find((el) => el.id === val.id)

      if (element) {
        return prev.filter((item) => item.id !== val.id)
      }

      return [...prev, val]
    })
  }, [])

  const setBrands = useCallback((val: State) => {
    _setBrands((prev) => {
      const element = prev.find((el) => el.id === val.id)

      if (element) {
        return prev.filter((item) => item.id !== val.id)
      }

      return [...prev, val]
    })
  }, [])

  const value = useMemo(
    () => ({
      brands,
      setBrands,
      categories,
      setCategories,
    }),
    [brands, categories, setBrands, setCategories],
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
