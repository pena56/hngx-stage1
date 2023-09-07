const d = new Date()

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

let day = weekday[d.getDay()]
let ms = d.getMilliseconds()

document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = day
document.querySelector('[data-testid="currentUTCTime"]').innerHTML = ms
