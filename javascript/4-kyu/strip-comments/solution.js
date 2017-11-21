const solution = (input, markers) =>
  input
    .split('\n')
    .map(line => {
      markers.forEach(marker => {
        const index = line.indexOf(marker)
        if (index >= 0) {
          line = line.slice(0, index)
        }
      })
      return line.trim()
    })
    .join('\n')
