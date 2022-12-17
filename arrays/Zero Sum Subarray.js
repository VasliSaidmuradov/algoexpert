// Zero Sum Subarray

// #1
function zeroSumSubarray(nums) {
  const set = new Set([0])
  let sumOfPrevSubarray = 0
  for (let num of nums) {
    sumOfPrevSubarray += num
    if (set.has(sumOfPrevSubarray)) return true
    set.add(sumOfPrevSubarray)
  }
  return false;
}

// #2
function zeroSumSubarray(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return true
    let currSum = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === 0) return true
      currSum += nums[j]
      if (currSum === 0) return true
    }
  }
  return false
}