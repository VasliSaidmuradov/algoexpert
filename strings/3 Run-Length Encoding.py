# Run-Lenght encoding

def runLengthEncoding(string):
  curRunLen = 1
  ans = ''
  for i in range(1, len(string)):
    cur = string[i]
    prev = string[i - 1]

    if cur != prev or curRunLen == 9:
      ans += str(curRunLen) + prev
      curRunLen = 0

    curRunLen += 1
  ans += str(curRunLen) + string[-1]
  return ans