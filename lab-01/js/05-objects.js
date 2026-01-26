/**
 * IT3-2304
 * Novikov Maxim
 * Tasks 31-35
 */

/**
 * Task 31
 * @param {Object} obj
 * @returns {number}
 */
function sumObjectValues(obj) {
  let sum = 0
  for (let key in obj) {
    if (typeof obj[key] === 'number') sum += obj[key]
  }
  return sum
}
logTask(31, sumObjectValues({ a: 10, b: '20', c: 30 })) // 40

/**
 * Task 32
 * @param {Object} obj
 * @returns {Object}
 */
function swapKeysAndValues(obj) {
  let result = {}
  for (let key in obj) {
    result[obj[key]] = key
  }
  return result
}
logTask(32, swapKeysAndValues({ a: 'apple', b: 'banana' })) // { apple: "a", banana: "b" }

/**
 * Task 33
 * @param {Array} arr
 * @returns {Array}
 */
function sortByAge(arr) {
  return [...arr].sort((a, b) => a.age - b.age)
}
logTask(33, sortByAge([{ age: 25 }, { age: 18 }, { age: 30 }])) // [{age: 18}, {age: 25}, {age: 30}]

/**
 * Task 34
 * @param {Object} obj
 * @returns {number}
 */
function findDeepMax(obj) {
  let max = -Infinity
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      max = Math.max(max, findDeepMax(obj[key]))
    } else if (typeof obj[key] === 'number') {
      max = Math.max(max, obj[key])
    }
  }
  return max
}
logTask(34, findDeepMax({ a: 5, b: { c: 15, d: { e: 20 } } })) // 20

/**
 * Task 35
 * @param {Object} obj
 * @param {string} prop
 * @returns {boolean}
 */
function hasDeepProperty(obj, prop) {
  if (Object.prototype.hasOwnProperty.call(obj, prop)) return true
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (hasDeepProperty(obj[key], prop)) return true
    }
  }
  return false
}
logTask(35, hasDeepProperty({ a: { b: { c: 1 } } }, 'c')) // true
