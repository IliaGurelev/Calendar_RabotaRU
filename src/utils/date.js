export function getMonthDays(date) {
  const days = []
  const year = date.getFullYear();
  const month = date.getMonth()
  const lastDay = new Date(year, month + 1, 0).getDate()
  
  for(let i = 1; i <= lastDay; i++) {
    days.push({
      date: new Date(year, month, i),
      number: i
    })
  }

  return days
}

export function getMonthName(monthNumber) {
  const month = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]

  return month[monthNumber]
}

export function getWeekDays(date) {
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  return [...weekDays.slice(firstDay), ...weekDays.slice(0, firstDay)]
}