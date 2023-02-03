import { createGlobalStyle } from 'styled-components'

import { DarkColors, LightColors } from './colors'

const isDark = false

const colors = isDark ? DarkColors : LightColors

export const theme = {
  colors,
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
