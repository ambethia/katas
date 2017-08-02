const accum = str => {
	return str.split('').map((c, i) => {
    return c.toUpperCase() + c.repeat(i).toLowerCase()
  }).join('-')
}