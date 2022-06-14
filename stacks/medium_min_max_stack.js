// Min Max Stack Construction

// #1
class MinMaxStack {
  constructor () {
    this.stack = []
    this.min = []
    this.max = []
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  pop() {
    const removed = this.stack.pop()
    const minVal = this.min.pop()
    const maxVal = this.max.pop()

    if (removed !== minVal) {
      this.min.push(minVal)
    }
    if (removed !== maxVal) {
      this.max.push(maxVal)
    }

    return removed
  }

  push(number) {
    this.stack.push(number)

    if (!this.min.length || (this.min.length && this.min[this.min.length - 1] >= number)) {
      this.min.push(number)
    }
    if (!this.max.length || (this.max.length && this.max[this.max.length - 1] <= number)) {
      this.max.push(number)
    }
  }

  getMin() {
    return this.min[this.min.length - 1]
  }

  getMax() {
    return this.max[this.max.length - 1]
  }
}


// #2
class MinMaxStack2 {
  constructor () {
    this.stack = []
    this.minMax = []
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  pop() {
    this.minMax.pop()
    return this.stack.pop()
  }

  push(number) {
    const newMinMax = { min: number, max: number }

    if (this.minMax.length) {
      const lastMinMax = this.minMax[this.minMax.length - 1]
      newMinMax.min = Math.min(number, lastMinMax.min)
      newMinMax.max = Math.max(number, lastMinMax.max)
    }

    this.minMax.push(newMinMax)
    this.stack.push(number)
  }

  getMin() {
    return this.minMax[this.minMax.length - 1].min
  }

  getMax() {
    return this.minMax[this.minMax.length - 1].max
  }
}