/**
 * IT3-2304
 * Novikov Maxim
 * Tasks 19-24
 */

/**
 * Task 19
 * @param {number} a
 * @param {number} b
 * @param {string} op
 * @returns {number|null}
 */
function calculator(a, b, op) {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return b !== 0 ? a / b : null
    default:
      return null
  }
}
logTask(19, calculator(10, 2, '/')) // 5

/**
 * Task 20
 * @param {Function} fn
 * @param {any} value
 * @returns {any}
 */
const applyTwice = (fn, value) => fn(fn(value))
logTask(
  20,
  applyTwice(x => x * 2, 5)
) // 20

/**
 * Task 21
 * @param {...number} args
 * @returns {number}
 */
const multiplyAll = (...args) => args.reduce((acc, val) => acc * val, 1)
logTask(21, multiplyAll(2, 3, 4)) // 24

/**
 * Task 22
 * @returns {Function}
 */
const createCounter = () => {
  let count = 0
  return function () {
    return ++count
  }
}
const counter = createCounter()
logTask(22, counter()) // 1

/**
 * Task 23
 * @param {number} n
 * @returns {number}
 */
const getFactorial = n => {
  if (n < 0) return null
  if (n === 0 || n === 1) return 1
  return n * getFactorial(n - 1)
}
logTask(23, getFactorial(5)) // 120

/**
 * Task 24
 * @param {Array} arr
 * @param {Function} cb
 * @returns {Array}
 */
function customFilter(arr, cb) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i])
    }
  }
  return result
}
logTask(
  24,
  customFilter([1, 2, 3, 4], x => x > 2)
) // [3, 4]
