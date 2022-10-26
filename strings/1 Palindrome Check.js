// My solutions
// #1
// O(n) time | O(n) space
function isPalindrome(string) {
  return string === [...string].reverse().join('')
}

// #2
// O(n) time | O(1) space
function isPalindrome(string) {
  let start = 0
  let end = string.length - 1

  while (start < end) {
    if (string[start] !== string[end]) return false

    start++
    end--
  }

  return true
}

// #3
// O(n^2) time | O(n) space
function isPalindrome(string) {
  let reversedStr = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i]
  }

  return string === reversedStr
}

// #4
// Recursion version AlgoExpert
function isPalindrome(string, i = 0) {
  j =  string.length - 1 - i

  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1)
}