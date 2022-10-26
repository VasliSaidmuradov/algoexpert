# 4 Generate Document

# 1
from collections import Counter
def generateDocument(characters, document):
  cnt = Counter(characters)

  for d in document:
    if d not in cnt or cnt[d] <= 0:
      return False
    cnt[d] -= 1

  return True