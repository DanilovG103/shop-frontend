import MUIModal, { ModalProps } from '@mui/material/Modal'

export const Modal = ({ children, open, onClose, ...rest }: ModalProps) => {
  return (
    <MUIModal disablePortal open={open} onClose={onClose} {...rest}>
      {children}
    </MUIModal>
  )
}
