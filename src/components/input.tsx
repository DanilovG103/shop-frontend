import React from 'react'
import { makeStyles, TextField, TextFieldProps } from '@material-ui/core'

const useStyles = makeStyles({
  input: {
    '& .MuiFormHelperText-contained': {
      margin: '3px 0 0',
    },
  },
})

export const Input = (props: TextFieldProps) => {
  const classes = useStyles()

  return <TextField variant="outlined" className={classes.input} {...props} />
}
