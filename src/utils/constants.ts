import { RequestStatusType } from 'src/generated'

export const statuses = {
  [RequestStatusType.Cancelled]: 'Отменен',
  [RequestStatusType.Delivered]: 'Доставлен',
  [RequestStatusType.Fulfilled]: 'Принят',
  [RequestStatusType.Pending]: 'Ожидание',
  [RequestStatusType.Rejected]: 'Отклонен',
}

export const statusesColor = {
  [RequestStatusType.Cancelled]: 'error',
  [RequestStatusType.Delivered]: 'info',
  [RequestStatusType.Fulfilled]: 'success',
  [RequestStatusType.Pending]: 'warning',
  [RequestStatusType.Rejected]: 'error',
} as const
