// Class Photos

// #1
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b-a)
  blueShirtHeights.sort((a, b) => b-a)
  const n = blueShirtHeights.length
  let countRed = 0
  let countBlue = 0
  for (let i = 0; i < n; i++) {
    if (redShirtHeights[i] > blueShirtHeights[i]) {
      countRed++
    } else if (redShirtHeights[i] < blueShirtHeights[i]) {
      countBlue++
    } else {
      return false
    }

    if (countRed > 0 && countBlue > 0) {
      return false
    } 
  }
  return true
}

// #2
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b-a)
  blueShirtHeights.sort((a, b) => b-a)
  const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE'

  for (let i = 0; i < redShirtHeights.length; i++) {
    const redShirtHeight = redShirtHeights[i]
    const blueShirtHeight = blueShirtHeights[i]

    if (shirtColorInFirstRow === 'RED') {
      if (redShirtHeight >= blueShirtHeight) {
        return false
      }
    } else if (blueShirtHeight >= redShirtHeight) {
      return false
    }
  }
  return true
}