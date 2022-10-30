import dayjs from 'dayjs'

export function formatMonthDay(date, formatStr = "MM月DD日") {
  return dayjs(date).format(formatStr)
}

export function getDiffDats(starDate, endDate) {
  return dayjs(endDate).diff(starDate,"day")
}