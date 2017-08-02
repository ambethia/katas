const pointInPoly = (polygon, point) => {
  let [xp, yp] = point
  let inside = false
  for (let i = 0, l = polygon.length; i < l; i++) {
    const [xa, ya] = polygon[i]
    const [xb, yb] = polygon[(i + 1) % l]
    if ((ya > yp !== yb > yp) && (xp < (xb - xa) * (yp - ya) / (yb - ya) + xa)) {
      inside = !inside
    }
  }
  return inside
}
