// Longest Palindromic Substring

// #1 Time O(N) | Space O(1)
function longestPalindromicSubstring(str) {
  let palindrome = [0, 1]

  for (let i = 1; i < str.length; i++) {
    const odd = getLongestPalindrome(str, i-1, i+1)
    const even = getLongestPalindrome(str, i-1, i)
    const temp = odd[1] - odd[0] > even[1] - even[0] ? odd : even

    if (palindrome[1] - palindrome[0] < temp[1] - temp[0]) {
      palindrome = temp
    }
  }

  return str.substring(palindrome[0], palindrome[1])
}

const getLongestPalindrome = (str, l, r) => {
  while (l >= 0 && r < str.length) {
    if (str[l] !== str[r]) {
      break;
    }
    l--
    r++
  }

  return [l+1, r]
}

// #2 Time O(N) | Space O(N)
function longestPalindromicSubstring(str) {
  let palindrom = str[0]

  for (let i = 1; i < str.length; i++) {
    let l = i-1
    let r = i+1
    while (l >= 0 && r < str.length) {
      if (str[l] !== str[r]) {
        break;
      }
      l--
      r++
    }
    let odd = str.slice(l+1, r)

    l = i-1
    r = i
    while (l >= 0 && r < str.length) {
      if (str[l] !== str[r]) {
        break;
      }
      l--
      r++
    }
    let even = str.slice(l+1, r)

    const temp = odd.length > even.length ? odd : even

    if (palindrom.length < temp.length) {
      palindrom = temp
    }
  }

  return palindrom
}

// #3 Time O(N^3) | Space O(N^2) - Very Bad
function longestPalindromicSubstring(str) {
  let palindrom = ''
  const set  = new Set()

  for (let i = 0; i < str.length; i++) {
    let tempStr = str[i]
    set.add(tempStr)

    for (let j = i + 1; j < str.length; j++) {
      tempStr += str[j]
      set.add(tempStr)
    }
  }

  set.forEach(el => {
    if (isPalindrom(el)) {
      if (palindrom.length < el.length) {
        palindrom = el
      }
    }
  })

  return palindrom
}

const isPalindrom = str => {
  let i = 0
  let j = str.length - 1

  while (i < j) {
    if (str[i] !== str[j]) {
      return false
    }
    i++
    j--
  }

  return true
}
