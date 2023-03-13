import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

import { Box } from './box'

export const Loader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%">
      <CircularProgress />
    </Box>
  )
}
