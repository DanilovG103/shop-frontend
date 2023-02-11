import { createGlobalStyle } from 'styled-components'

import { Colors } from './colors'

export const theme = {
  colors: Colors,
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`
