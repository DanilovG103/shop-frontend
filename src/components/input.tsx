import React, { forwardRef } from 'react'
import { styled } from '@mui/material'
import TextField, { TextFieldProps } from '@mui/material/TextField'

const Field = styled(TextField)(() => ({
  '& .MuiFormHelperText-contained': {
    margin: '3px 0 0',
  },
  width: '100%',
}))

export const Input = forwardRef<{ value: string }, TextFieldProps>(
  (props, forwardedRef) => {
    return <Field variant="outlined" {...props} inputRef={forwardedRef} />
  },
)

Input.displayName = 'Input'
