// Same BST

// #1
function sameBsts(arrayOne, arrayTwo) {
  const helper = (arr1, arr2) => {
    const root1 = arr1[0]
    const root2 = arr2[0]
    if (root1 !== root2 || arr1.length !== arr2.length) return false
    if (!arr1.length || !arr2.length) return true

    const left1 = []
    const left2 = []
    const right1 = []
    const right2 = []

    for (let i = 1; i < arr1.length; i++) {
      if (arr1[i] < root1) left1.push(arr1[i])
      else right1.push(arr1[i])

      if (arr2[i] < root2) left2.push(arr2[i])
      else right2.push(arr2[i])
    }

    return helper(left1, left2) && helper(right1, right2)
  }

  return helper(arrayOne, arrayTwo)
}