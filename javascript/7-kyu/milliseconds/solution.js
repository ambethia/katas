

const toString = (time) => {
  const seconds = time / 1000
  const minutes = seconds / 60
  const hours = minutes / 60
  let parts
  if (hours >= 1) {
    parts = [
      Math.floor(hours),
      ("0" + Math.floor(minutes % 60)).slice(-2),
      ("0" + Math.floor(seconds % 60)).slice(-2)
    ]
  } else {
    parts = [
      Math.floor(minutes % 60),
      ("0" + Math.floor(seconds % 60)).slice(-2)
    ]
  }

  return parts.join(":")
}