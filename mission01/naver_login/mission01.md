# mission01 과제 내용

## 네이버 로그인 페이지 구현

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

<br>

- `emailReg`와 `pwReg` 정규식 함수는 따로 분리하여 임포트하여 사용.
- `validateInput` 함수를 통해 입력 값의 유효성을 검사하고, 클래스 추가/제거.
- `loginForm`에 `input` 이벤트 리스너 추가하여 이벤트 위임을 통해 검증.
- 로그인 버튼 클릭 시 `welcome.html` 로 이동 또는 경고 창 표시.

---

### 입력 값의 유효성을 검사하는 함수 정의

```javascript
const validateInput = (input, regex) => {
  const isValid = regex(input.value);
  isValid
    ? input.classList.remove('is--invalid')
    : input.classList.add('is--invalid');

  return isValid;
};
```

- `input.value` 로 input의 현재 값을 가져오고 `regex(input.value)`로 유효성 검사
  - 그 결과를 담은 `isValid`가 참트루면 `is--invalid` 클래스 제거
  - 거짓이면 `is--invalid` 클래스 추가.

<br/>

### 이벤트 위임을 사용하여 검증

```javascript
loginForm.addEventListener('input', (e) => {
  const target = e.target;

  if (target.id === 'userEmail') {
    isEmailValid = validateInput(target, emailReg);
  } else if (target.id === 'userPassword') {
    isPasswordValid = validateInput(target, pwReg);
  }
});
```

- `loginForm`에 `input` 이벤트 리스너 추가
  - 이 이벤트 리스너는 전체 폼 내에서 발생하는 `input` 이벤트를 처리해 쥼
  - 콜백함수로 받은 `e(event).target`이 `userEmail` || `userPw` 입력필드에 대한 정보를 갖고있음.
    - `target.id` 가 `userEmail`인 경우 이메일input에서 이벤트가 발생한 것
    - `target.id` 가 `userPassword`인 경우 비번input에서 이벤트가 발생한 것
  - 입력필드에서 이벤트가 발생한 경우 `validateInput` 함수로 유효성 검사

<br/>

### 로그인 버튼 클릭 시 검증 및 처리

```javascript
loginButton.addEventListener('click', (event) => {
  event.preventDefault();

  const emailValid = validateInput(emailInput, emailReg);
  const passwordValid = validateInput(passwordInput, pwReg);

  if (emailValid && passwordValid) {
    if (emailInput.value === user.id && passwordInput.value === user.pw) {
      window.location.href = 'welcome.html';
      emailInput.value = '';
      passwordInput.value = '';
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  } else {
    alert('아이디 또는 비밀번호를 올바르게 입력해 주세요.');
  }
```

- `loginButton`에 click 이벤트 리스너를 추가
- 버튼 클릭 시 폼 제출 되지 않도록 `event.preventDefault()` 사용
- `validateInput` 함수로 이메일과 비밀번호 입력 값의 유효성을 검사
  - 그 결과가 모두 참이면 ?
    - 입력된 이메일과 비밀번호가 사용자 정보(user)와 일치하는지 ?
      - 일치 : `welcome` 페이지로 이동
      - 불일치 : 일치하지 않는다구 alert
  - 하나라도 참이 아니라면 올바르게 입력하라고 alert
  - 로그인 이후 input 필드가 초기화 되지 않고 유저 정보가 남아있는 현상이 생겼음
    - `emailInput.value = ''` 코드를 추가하여 페이지 이동 후에는 입력 필드 초기화 해줬음..

<br>
