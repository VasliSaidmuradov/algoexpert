// Tandem Bicycle

// #1
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b)
  blueShirtSpeeds.sort((a, b) => a - b)
  if (fastest) redShirtSpeeds.reverse()
  let total = 0
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const rider1 = redShirtSpeeds[i]
    const rider2 = blueShirtSpeeds[i]
    total += Math.max(rider1, rider2)
  }
  return total
}