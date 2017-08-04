const { asin, cos, floor, sqrt, PI } = Math

// Earth's radius
const R = 6371

// Haversine function
const hav = th => (1 - cos(th)) / 2

const distance = (a, b) => {
  const [[φ1, λ1], [φ2, λ2]] = [a, b].map(dms => dms.split(', ').map(parse))
  const d = R * 2 * asin(sqrt(hav(φ2 - φ1) + cos(φ1) * cos(φ2) * hav(λ2 - λ1)))
  return floor(d / 10) * 10
}

// Parse a coordinate given in DMS format to a decimal in radians
const parse = coor => {
  const [d, m, s, h] = coor.match(/(\d+)° (\d+)′ (\d+)″ (\w)/).slice(1)
  return (+d + m / 60 + s / 3600) * (/[SW]/.test(h) ? -1 : 1) * PI / 180
}
