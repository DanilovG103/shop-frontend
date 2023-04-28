import type { BreakpointsOptions } from '@mui/material'

import { muiTheme } from 'src/theme'

declare type Maybe<T> = T | null

type Colors = (typeof muiTheme)['colors']

interface Breakpoints extends BreakpointsOptions {
  xs: string
  sm: string
  lg: string
  md: string
  xl: string
  xxl: string
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: Colors
    breakpoints: Breakpoints
  }

  interface ThemeOptions {
    colors: Colors
    breakpoints: Breakpoints
  }

  interface BreakpointOverrides {
    xxl: true
  }
}
