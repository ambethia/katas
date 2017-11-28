to24hourtime <- function(hour, minute, period) {
  if (hour == 12) { hour = 0 }
  if (period == 'pm') { hour = hour + 12 }
  sprintf("%02d%02d", hour, minute)
}
