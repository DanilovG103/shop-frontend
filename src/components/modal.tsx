import { Dialog, DialogProps } from '@material-ui/core'

export const Modal = ({ children, open, onClose, ...rest }: DialogProps) => {
  return (
    <Dialog disablePortal open={open} onClose={onClose} {...rest}>
      {children}
    </Dialog>
  )
}
