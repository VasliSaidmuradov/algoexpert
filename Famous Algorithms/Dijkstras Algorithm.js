// Dijkstras Algorithm

// #1
function dijkstrasAlgorithm(start, edges) {
  const n = edges.length
  const dist = Array(n).fill(Infinity)
  const queue = new PriorityQueue()

  // Build ut initial state
  for (let i = 0; i < edges.length; i++) {
    if (i === start) {
      dist[i] = 0
      queue.enqueue(i, 0)
    } else {
      dist[i] = Infinity
      queue.enqueue(i, Infinity)
    }
  }

  while (!queue.empty()) {
    const { value: vertex, priority } = queue.dequeue()

    for (const [ destination, distance ] of edges[vertex]) {
      const candidate = dist[vertex] + distance
      if (candidate < dist[destination]) {
        dist[destination] = candidate
        queue.enqueue(destination, candidate)
      } 
    }
  }
  
  return dist.map(el => el === Infinity ? -1 : el)
}

// 
class PriorityQueue {
  constructor() {
    this.queue = []
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority })
    this.sort()
  }

  dequeue() {
    return this.queue.shift()
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority)
  }

  empty() {
    return this.queue.length === 0
  }
}

// Do not edit the line below.
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
 