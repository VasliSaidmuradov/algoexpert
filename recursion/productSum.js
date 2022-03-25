// productSum
// https://www.algoexpert.io/questions/Product%20Sum

function productSum(array) {
  // Write your code here.	
  const helper = (arr, depth = 1) => {
    let sum = 0

    for (let elem of arr) {
      if (Array.isArray(elem))
        sum += helper(elem, depth + 1)
      else
        sum += elem
    }

    return sum * depth
  }

  return helper(array)
}


// AlgoExpert Solutions:
// O(n) time | O(d) space - where n is the total number of elements in the array,
// including sub-elements, and d is the greatest depth of "special" arrays in the array

function productSum(array, depth = 1) {
  // Write your code here.	
  let sum = 0
	
  for (let elem of array) {
    if (Array.isArray(elem))
      sum += productSum(elem, depth + 1)
    else
      sum += elem
  }

  return sum * depth
}