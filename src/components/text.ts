import type { CSSProperties } from 'react'
import { styled } from '@mui/material'
import {
  color,
  ColorProps,
  colorStyle,
  ColorStyleProps,
  compose,
  fontWeight,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
} from 'styled-system'

export type TextProps = ColorProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  TextStyleProps &
  TypographyProps &
  ColorStyleProps & {
    cursor?: CSSProperties['cursor']
  }

export const Text = styled('p')<TextProps>`
  cursor: ${({ cursor }) => cursor};
  ${compose(
    color,
    space,
    layout,
    position,
    textStyle,
    colorStyle,
    typography,
    fontWeight,
  )};
`

Text.displayName = 'Text'
