// Valid Starting City

// #1 Time O(n^2) | Space O(1)
function validStartingCity(distances, fuel, mpg) {
  const numberOfCities = distances.length

  for (let startCityIdx = 0; startCityIdx < numberOfCities; startCityIdx++) {
    let milesRemaining = 0

    for (let currCityIdx = startCityIdx; currCityIdx < startCityIdx + numberOfCities; currCityIdx++) {
      if (milesRemaining < 0) {
        continue
      }
      const idx = currCityIdx % numberOfCities
      const fuelFromCurrCity = fuel[idx]
      const distanceToNextCity = distances[idx]
      milesRemaining += fuelFromCurrCity * mpg - distanceToNextCity
    }

    if (milesRemaining >= 0) {
      return startCityIdx
    }
  }

  return -1
}

// #2
function validStartingCity(distances, fuel, mpg) {
  const numberOfcities = distances.length
  let milesRemaning = 0

  let candidateCityIdx = 0
  let milesremaningAtStartCandidateCity = 0

  for (let idx = 1; idx < numberOfcities; idx++) {
    const distanceFromPrevCity = distances[idx - 1]
    const fuelFromprevCity = fuel[idx - 1]
    milesRemaning += fuelFromprevCity * mpg - distanceFromPrevCity

    if (milesRemaning < milesremaningAtStartCandidateCity) {
      milesremaningAtStartCandidateCity = milesRemaning
      candidateCityIdx = idx
    }
  }

  return candidateCityIdx
}