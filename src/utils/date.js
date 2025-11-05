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

export function getMonthName(monthNumber, locale = 'ru-RU') {
  const date = new Date(2025, monthNumber, 1)
  return date.toLocaleString(locale, {month: 'long'})
}

export function getWeekDays(date, locale = 'ru-RU') {
  const weekDays = []
  for(let i = 0; i < 7; i++) {
    const day = new Date(2025, 11, i)
    weekDays.push(day.toLocaleString(locale , {weekday: 'short'})) 
  }

  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  return [...weekDays.slice(firstDay), ...weekDays.slice(0, firstDay)]
}