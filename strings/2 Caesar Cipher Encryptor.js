// Caesar Cipher Encryptor

// #1
function caesarCipherEncryptor(string, key) {
  const START = 96
  const END = 122
  const LENGTH = 26
  key = key % LENGTH

  if (key === 0) return string

  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i)
    let newCode = (code + key)
    if (newCode > END) {
      newCode = START + newCode % END
    }
    const newChar = String.fromCharCode(newCode)
    string = string.slice(0, i) + newChar + string.slice(i + 1)
  }

  return string
}

// #2
function caesarCipherEncryptor(string, key) {
  let newLetters = ''
  const newkey = key % 26
  for (let ch of string) {
    newLetters += getNewLetter(ch, newkey)
  }
  return newLetters
}

const getNewLetter = (letter, key) => {
  const newLetterCode = letter.charCodeAt() + key
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122))
}