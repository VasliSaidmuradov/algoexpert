// Run-Length Encoding (easy)

// #1
function runLengthEncoding(string) {
  // Write your code here.
  const MAX_LENGTH = 9
  let l = 0
  let r = 0
  let ans = ''
  while (r <= string.length) {
    while (string[l] === string[r] && (r - l) < MAX_LENGTH) {
      r++
    }
    ans += `${r - l}${string[l]}`
    l = r
    r++
  }

  return ans
}

// #2
function runLengthEncoding(string) {
  // Write your code here.
  let ans = ''
  let curRunLength = 1

  for (let i = 1; i <= string.length; i++) {
    const cur = string[i]
    const prev = string[i - 1]

    if (cur !== prev || curRunLength === 9) {
      ans += curRunLength + prev
      curRunLength = 0
    }

    curRunLength++
  }

  // ans += curRunLength + string[string.length - 1]

  return ans
}