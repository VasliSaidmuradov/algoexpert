// Min Number Of Coins To Change

// #1
function minNumberOfCoinsForChange(n, denoms) {
  const numberOfCoins = Array(n+1).fill(Infinity)
  numberOfCoins[0] = 0
  for (const denom of denoms) {
    for (let i = 1; i < numberOfCoins.length; i++) {
      if (denom <= i) {
        const amount = numberOfCoins[i]
        const diff = i - denom
        numberOfCoins[i] = Math.min(amount, 1 + numberOfCoins[diff])
      }
    }
  }
  return numberOfCoins.at(-1) === Infinity ? -1 : numberOfCoins.at(-1)
}