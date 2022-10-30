import dayjs from 'dayjs'

export function formatMonthDay(date) {
  return dayjs(date).format("MM月DD日")
}

export function getDiffDats(starDate, endDate) {
  return dayjs(endDate).diff(starDate,"day")
}