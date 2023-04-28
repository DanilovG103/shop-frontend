import { css } from '@emotion/react'
import { createTheme } from '@mui/material'

import { colors } from './colors'

const xs = 319
const sm = 577
const md = 769
const lg = 1023
const xl = 1231
const xxl = 1920

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
    },
    // For styled-system
    xs: `${xs}px`,
    sm: `${sm}px`,
    md: `${md}px`,
    lg: `${lg}px`,
    xl: `${xl}px`,
    xxl: `${xxl}px`,
  },
  colors,
})

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${colors.text_primary};
  }
`
