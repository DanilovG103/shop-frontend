import { styled } from '@mui/material'
import {
  background,
  BackgroundProps,
  border,
  BordersProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from 'styled-system'

export type BoxProps = GridProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  ShadowProps &
  FlexboxProps &
  BordersProps &
  OverflowProps &
  PositionProps &
  BackgroundProps

export const Box = styled('div')<BoxProps>`
  ${compose(
    grid,
    color,
    space,
    layout,
    border,
    shadow,
    flexbox,
    overflow,
    position,
    background,
  )}
`
