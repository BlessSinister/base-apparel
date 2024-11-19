const input = document.querySelector('input')

const btn = document.querySelector('.btn_sub_wrapper')
const error_icon = document.getElementById('error_id')
const input_error = document.getElementById('error_input')
const error_message = document.querySelector('.error_message ')

const fn1 = () => {
  if (input.value.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/)) {
    console.log('Hello', input.value)
    input.value = ''
  } else {
    error_icon.classList.add('active')
    input_error.classList.add('active-border')
    error_message.classList.add('active')
    setTimeout(() => {
      error_icon.classList.remove('active')
      input_error.classList.remove('active-border')
      error_message.classList.remove('active')
      input.value = ''
    }, 2000)
  }
}
btn.addEventListener('click', fn1)
