import { css } from '@emotion/react'
import { createTheme } from '@mui/material'

import { colors } from './colors'

const xs = 319
const sm = 577
const md = 769
const lg = 1023
const xl = 1231

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs,
      sm,
      md,
      lg,
      xl,
    },
  },
})

export const theme = {
  colors,
  breakpoints: [xs, sm, md, lg, xl].map((el) => el.toString() + 'px'),
}

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    color: ${colors.text_primary};
  }

  a {
    text-decoration: none;
  }
`
