// Minimum Wating Time

// #1 O(nLog(N)) Time | O(N) Space
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b)
  const pref = []
  let total = 0
  for (let i = 0; i < queries.length-1; i++) {
    total += queries[i]
    pref.push(total)
  }

  total = 0
  for (let i = 0; i < pref.length; i++) {
    total += pref[i]
  }

  return total
}

// #2 O(nLog(N)) Time | O(1) Space
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b)
  let total = 0
  let length = queries.length

  for (let i = 0; i < length; i++) {
    total += queries[i] * (length - i - 1)
  }

  return total
}