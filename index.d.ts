import { theme } from 'src/theme'

type CustomTheme = typeof theme

declare type Maybe<T> = T | null

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
