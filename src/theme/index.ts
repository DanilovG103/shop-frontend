import { css } from '@emotion/react'

import { colors } from './colors'

export const theme = {
  colors,
  breakpoints: ['319px', '577px', '769px', '1023px', '1231px'],
}

export const globalStyles = css`
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
