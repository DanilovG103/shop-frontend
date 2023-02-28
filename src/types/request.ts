import { RequestPaymentTypeType } from 'src/generated'

export interface CreateRequestValues {
  address: string
  paymentType: RequestPaymentTypeType
  recipientEmail: string
  recipientName: string
  sum: number
}
