# Merge Overlapping Intervals

# 1 Time O(Nlog(N)) | Space O(N)
def mergeOverlappingIntervals(intervals):
  intervals.sort()
  stack = []

  for interval in intervals:
    if not stack:
      stack.append(interval)
    else:
      lastIntervalInStack = stack.pop()

      if lastIntervalInStack[1] >= interval[0]:
        stack.append([lastIntervalInStack[0], max(lastIntervalInStack[1], interval[1])])
      else:
        stack.append(lastIntervalInStack)
        stack.append(interval)

  return stack

def isOverlapping(intervalOne, intervalTwo):
  return intervalOne[1] >= intervalTwo[0]

def merTwoIntervals(intervalOne, intervalTwo):
  return [min(intervalOne[0], intervalTwo[0]), max(intervalOne[1], intervalTwo[1])]


# 2 Time O(Nlog(N)) | Space O(N)
def mergeOverlappingIntervals(intervals):
  sortedIntervals = sorted(intervals, key=lambda x: x[0])

  mergedIntervals = []
  currInterval = sortedIntervals[0]
  mergedIntervals.append(currInterval)

  for nextInterval in sortedIntervals:
    if currInterval[1] >= nextInterval[0]:
      currInterval[1] = max(currInterval[1], nextInterval[1])
    else:
      currInterval = nextInterval
      mergedIntervals.append(currInterval)

  return mergedIntervals