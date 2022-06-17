// Reverse Words in String

// #1
function reverseWordsInString(s) {
  // Write your code here.
  const res = []
  let i = 0
  let j = 0

  while (j < s.length) {
    if (s[i] !== ' ' && s[j] === ' ') {
      res.push(s.slice(i, j))
      i = j
    }

    if (s[i] === ' ' && s[j] !== ' ') {
      res.push(s.slice(i, j))
      i = j
    }

    j++
  }

  res.push(s.slice(i))

  i = 0
  j = res.length - 1

  while (i < j) {
    const temp = res[i]
    res[i] = res[j]
    res[j] = temp

    i++
    j--
  }

  return res.join('')
}