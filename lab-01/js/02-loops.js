/**
 * IT3-2304
 * Novikov Maxim
 * Tasks 13-18
 */

/**
 * Task 13
 * @param {number} num
 * @returns {number}
 */
function calculateSum(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}
logTask(13, calculateSum(5)) // 15

/**
 * Task 14
 * @param {number} num
 * @returns {number}
 */
function countDigits(num) {
  let count = 0
  let temp = Math.abs(num)

  if (temp === 0) return 1

  while (temp >= 1) {
    temp /= 10
    count++
  }

  return count
}
logTask(14, countDigits(12345)) // 5

/**
 * Task 15
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
  if (num <= 1) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}
logTask(15, isPrime(7)) // true

/**
 * Task 16
 * @param {number} num
 * @returns {number}
 */
function reverseNumber(num) {
  let result = 0
  let temp = Math.abs(num)

  while (temp > 0) {
    result = result * 10 + (temp % 10)
    temp = Math.floor(temp / 10)
  }

  return num < 0 ? -result : result
}
logTask(16, reverseNumber(-123)) // -321

/**
 * Task 17
 * @param {number} n
 * @returns {number}
 */
function getFibonacci(n) {
  if (n <= 1) return n

  let a = 0
  let b = 1

  for (let i = 2; i <= n; i++) {
    let temp = a + b
    a = b
    b = temp
  }

  return b
}
logTask(17, getFibonacci(7)) // 13

/**
 * Task 18
 * @param {number} num
 * @returns {boolean}
 */
function isPalindrome(num) {
  if (num < 0) return false

  const reversed = n => {
    let res = 0
    let t = Math.abs(n)
    while (t > 0) {
      res = res * 10 + (t % 10)
      t = Math.floor(t / 10)
    }
    return res
  }

  return num === reversed(num)
}
logTask(18, isPalindrome(121)) // true
