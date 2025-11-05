export function getMonthDays(date) {
  const days = []
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  
  for(let i = 1; i <= lastDay; i++) {
    days.push(i)
  }

  return days
}

export function getMonthName(monthNumber) {
  const month = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]

  return month[monthNumber - 1]
}