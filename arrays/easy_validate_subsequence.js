// Validate Subsequence

// #1
// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  let seqIdx = 0

  for (const value of array) {
    if (sequence[seqIdx] === value) seqIdx++
    if(seqIdx === sequence.length) break
  }

  return seqIdx === sequence.length
}

// #2
// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  arrIdx = 0
  seqIdx = 0

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++
    arrIdx++
  }

  return seqIdx === sequence.length
}
