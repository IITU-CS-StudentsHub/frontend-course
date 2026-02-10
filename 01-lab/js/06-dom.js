/**
 * IT3-2304
 * Novikov Maxim
 * Tasks 36-40
 */

/**
 * Task 36
 */
document.querySelector('#myButton').addEventListener('click', () => {
  document.querySelector('#myParagraph').textContent = 'Hello, World!'
})

/**
 * Task 37
 */
window.addEventListener('DOMContentLoaded', () => {
  const count = document.querySelectorAll('ul#myList li').length
  document.querySelector('#counterDisplay').textContent = count
})

/**
 * Task 38
 */
document.querySelector('#addButton').addEventListener('click', () => {
  const input = document.querySelector('#itemInput')
  const list = document.querySelector('#myList')
  if (input.value.trim() !== '') {
    const li = document.createElement('li')
    li.textContent = input.value
    list.appendChild(li)
    input.value = ''
  }
})

/**
 * Task 39
 */
document.querySelectorAll('.action').forEach(btn => {
  btn.addEventListener('click', function () {
    console.log(this.textContent)
  })
})

/**
 * Task 40
 */
document.querySelector('#myForm').addEventListener('submit', function (e) {
  const name = document.querySelector('#nameInput').value
  const email = document.querySelector('#emailInput').value
  if (name.trim() === '' || !email.includes('@')) {
    e.preventDefault()
    alert('Validation error!')
  }
})
