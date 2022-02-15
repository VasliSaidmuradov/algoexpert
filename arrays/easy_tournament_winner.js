// Tournament Winner

// #1
// O(n) time | O(k) space n is number of competitions, k is number of teams
function tournamentWinner(competitions, results) {
  const obj = {}
  const n = competitions.length

  for (let i = 0; i < n; i++) {
    if(results[i] === 1) {
      obj[competitions[i][0]] = (obj[competitions[i][0]] || 0) + 3
    } else {
      obj[competitions[i][1]] = (obj[competitions[i][1]] || 0) + 3
    }
  }

  let res = 0
  let winner = null

  for (const team in obj) {
    if (obj[team] > res) {
      res = obj[team]
      winner = team
    }
  }

  return winner
}

// #2
// O(n) time | O(k) space n is number of competitions, k is number of teams
function tournamentWinner(competitions, results) {
  // Write your code here.
  const HOME_TEAM_WON = 1
  const obj = {}
  const n = competitions.length
  let res = 0
  let winner = null

  for (let i = 0; i < n; i++) {
    const [homeTeam, awayTeam] = competitions[i]
    const result = results[i]
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

    obj[winningTeam] = (obj[winningTeam] || 0) + 3

    if (obj[winningTeam] > res) {
      res = obj[winningTeam]
      winner = winningTeam
    }
  }

  return winner
}
