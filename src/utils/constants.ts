import { RequestStatusType } from 'src/generated'

export const statuses = {
  [RequestStatusType.Created]: 'Создан',
  [RequestStatusType.Fulfilled]: 'Принят',
  [RequestStatusType.Delivered]: 'Доставлен',
  [RequestStatusType.Cancelled]: 'Отменен',
  [RequestStatusType.Rejected]: 'Отклонен',
}

export const statusesColor = {
  [RequestStatusType.Cancelled]: 'error',
  [RequestStatusType.Delivered]: 'info',
  [RequestStatusType.Fulfilled]: 'success',
  [RequestStatusType.Created]: 'warning',
  [RequestStatusType.Rejected]: 'error',
} as const
