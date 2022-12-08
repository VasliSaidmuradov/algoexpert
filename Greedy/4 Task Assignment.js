// Task Assignment

// #1
function taskAssignment(k, tasks) {
  const ans = []
  const hash = {}
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]
    if (!(task in hash)) {
      hash[task] = []
    }
    hash[task].push(i)
  }

  tasks.sort((a, b) => a-b)
  let i = 0
  let j = tasks.length - 1

  while (i < j) {
    const leftCurr = tasks[i]
    const rightCurr = tasks[j]

    const leftIdx = hash[leftCurr].pop()
    const rightIdx = hash[rightCurr].pop()

    ans.push([leftIdx, rightIdx])
    i++
    j--
  }

  return ans
}

// #2
function taskAssignment(k, tasks) {
  const ans = []
  const formattedTasks = tasks.map((val, idx) => ({ val, idx }))
  formattedTasks.sort((a, b) => a.val - b.val)

  for (i = 0, j = tasks.length - 1; i < j; i++, j--) {
    ans.push([formattedTasks[i].idx, formattedTasks[j].idx])
  }
  return ans
}