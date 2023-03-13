import format from 'date-fns/format'

export const formatRequestTime = (date: string) => {
  return format(new Date(date), 'd.M.y')
}
