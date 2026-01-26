/**
 * IT3-2304
 * Novikov Maxim
 * Tasks 25-30
 */

/**
 * Task 25
 * @param {Array<number>} arr
 * @returns {number}
 */
function findSecondMax(arr) {
  let max = -Infinity
  let secondMax = -Infinity

  for (let num of arr) {
    if (num > max) {
      secondMax = max
      max = num
    } else if (num > secondMax && num < max) {
      secondMax = num
    }
  }
  return secondMax
}
logTask(25, findSecondMax([10, 20, 5, 20, 15])) // 15

/**
 * Task 26
 * @param {Array} arr
 * @returns {Array}
 */
function removeDuplicates(arr) {
  return [...new Set(arr)]
}
logTask(26, removeDuplicates([1, 2, 2, 3, 1])) // [1, 2, 3]

/**
 * Task 27 (Two Sum)
 * @param {Array<number>} arr
 * @param {number} target
 * @returns {boolean}
 */
function hasTwoSum(arr, target) {
  let seen = new Set()
  for (let num of arr) {
    if (seen.has(target - num)) return true
    seen.add(num)
  }
  return false
}
logTask(27, hasTwoSum([10, 15, 3, 7], 17)) // true

/**
 * Task 28
 * @param {Array<number>} arr
 * @param {number} k
 * @returns {Array<number>}
 */
function rotateArr(arr, k) {
  if (arr.length === 0) return arr
  let steps = k % arr.length
  return arr.slice(-steps).concat(arr.slice(0, -steps))
}
logTask(28, rotateArr([1, 2, 3, 4, 5], 2)) // [4, 5, 1, 2, 3]

/**
 * Task 29 (Алгоритм Кадана)
 * @param {Array<number>} arr
 * @returns {number}
 */
function maxSubArraySum(arr) {
  if (arr.length === 0) return 0
  let maxSoFar = arr[0]
  let currentMax = arr[0]
  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i])
    maxSoFar = Math.max(maxSoFar, currentMax)
  }
  return maxSoFar
}
logTask(29, maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6

/**
 * Task 30
 * @param {Array<number>} arr
 * @returns {boolean}
 */
function isStrictlyIncreasing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false
  }
  return true
}
logTask(30, isStrictlyIncreasing([1, 2, 5, 10])) // true
