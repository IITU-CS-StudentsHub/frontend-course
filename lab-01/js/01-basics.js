/**
 * IT3-2304
 * Novikov Maxim
 * Tasks 1-12
 */

/**
 * Task 1
 * @param {any} value
 * @returns {string}
 */
function getExtendedType(value) {
  if (value === null) return 'null'
  if (Array.isArray(value)) return 'array'
  if (value instanceof Date) return 'date'

  const actualType = typeof value

  if (actualType === 'number' && !isNaN(value)) {
    return Number.isInteger(value) ? 'integer' : 'float'
  }

  return actualType
}
logTask(1, getExtendedType(3.14)) // 'float'

/**
 * Task 2
 * @param {string} str
 * @returns {boolean}
 */
function isConvertibleToNumber(str) {
  if (typeof str !== 'string') return false

  const num = Number(str)
  return Number.isFinite(num)
}
logTask(2, isConvertibleToNumber('123')) // true

/**
 * Task 3
 */
const getImplicitCoercionResult = () => '5' * 2 + '3'
logTask(3, getImplicitCoercionResult()) // '103'

/**
 * Task 4
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const isStrictEqual = (a, b) => a === b
logTask(4, isStrictEqual(5, '5')) // false

/**
 * Task 5
 * @param {any} value
 * @returns {boolean}
 */
const getBooleanRepresentation = value => Boolean(value)
logTask(5, getBooleanRepresentation(0)) // false

/**
 * Task 6
 * @param {any} value
 * @returns {boolean}
 */
const isFalsy = value => !value
logTask(6, isFalsy(null)) // true

/**
 * Task 7
 * @param {number} num
 * @returns {string}
 */
function checkNumberSign(num) {
  if (num < 0) return 'negative'
  if (num > 0) return 'positive'

  return 'zero'
}
logTask(7, checkNumberSign(-10)) // 'negative'

/**
 * Task 8
 * @param {number} num
 * @returns {boolean}
 */
const isDivisibleBy3and5 = num => num % 3 === 0 && num % 5 === 0
logTask(8, isDivisibleBy3and5(15)) // true

/**
 * Task 9
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */
function findMaxOfThree(a, b, c) {
  let max = a
  if (max < b) max = b
  if (max < c) max = c

  return max
}
logTask(9, findMaxOfThree(1, 5, 3)) // 5

/**
 * Task 10
 * @param {number} day
 * @returns {string}
 */
function getDayOfWeek(day) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  return days[day - 1] || 'Invalid day'
}
logTask(10, getDayOfWeek(1)) // 'Monday'

/**
 * Task 11
 * @param {number} age
 * @returns {string}
 */
function getAgeCategory(age) {
  if (age < 18) return 'child'
  if (age < 65) return 'adult'

  return 'senior'
}
logTask(11, getAgeCategory(70)) // 'senior'

/**
 * Task 12
 * @param {string} login
 * @param {string} password
 * @returns {string}
 */
function checkAccess(login, password) {
  if (login === 'admin' && password === '1234') return 'access granted'

  return 'access denied'
}
logTask(12, checkAccess('admin', '1234')) // 'access granted'
