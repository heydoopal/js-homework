import { emailReg, pwReg } from '../lib/utils/authValidation.js';

const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('#userEmail');
const passwordInput = document.querySelector('#userPassword');
const loginButton = document.querySelector('.btn-login');

let isEmailValid = false;
let isPasswordValid = false;

const validateInput = (input, regex) => {
  const isValid = regex(input.value);
  isValid
    ? input.classList.remove('is--invalid')
    : input.classList.add('is--invalid');
  return isValid;
};

loginForm.addEventListener('input', (e) => {
  const target = e.target;

  if (target.id === 'userEmail') {
    isEmailValid = validateInput(target, emailReg);
  } else if (target.id === 'userPassword') {
    isPasswordValid = validateInput(target, pwReg);
  }
});

loginButton.addEventListener('click', (event) => {
  event.preventDefault();

  const emailValid = validateInput(emailInput, emailReg);
  const passwordValid = validateInput(passwordInput, pwReg);

  if (emailValid && passwordValid) {
    if (emailInput.value === user.id && passwordInput.value === user.pw) {
      window.location.href = 'welcome.html';
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  } else {
    alert('아이디 또는 비밀번호를 올바르게 입력해 주세요.');
  }
});
