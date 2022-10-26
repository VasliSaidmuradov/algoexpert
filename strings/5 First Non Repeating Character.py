# First Non Repeating Character

# 1
from collections import Counter
def firstNonRepeatingCharacter(str):
  hash = Counter(str)

  for i in range(len(str)):
    ch = str[i]
    if hash[ch] == 1:
      return i
  return -1
