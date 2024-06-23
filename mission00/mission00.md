# mission00 과제 내용

#### 객체에서 특정 키의 값을 가져오는 함수 생성 `getValueAtObject`
```javascript
const getValueAtObject = (obj, key) => {
  if (typeof obj !== 'object' || Object.is(obj, null))
    throw new Error(
      `첫번째 인수에는 객체가 와야해요. '${obj}'은/는 객체가 아니에요`
    );

  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    throw new Error(`'${key}'라는 key가 해당 객체에 존재하지 않아요`);
  }
};
```

- 특정 키 값을 안전하게 가져오기

  - 객체의 메서드를 직접 호출하는 `hasOwnProperty()`는 객체가 만약 'hasOwnProperty' 라는 속성을 가지고 있을 경우, 해당 메서드를 오버라이드 할 수 있는 문제가 있다!
  - **So,** **`Object.prototype.hasOwnProperty`** 메서드를 명시적으로 호출하여 obj에 대해 호출한다. 이는 객체가 `hasOwnProperty` 메서드를 오버라이드 한다 해도 안전하게 작동한다.

- 첫번째 인수인 `obj` 가 객체가 아니라면 `throw new Error` 처리
- 객체 내에 해당 키가 없다면 `throw new Error` 처리

<br>

#### 배열에서 특정 인덱스의 값을 가져오는 함수 생성 `getNumberAtArray`
```javascript
const getNumberAtArray = (arr, index) => {
  if (!Array.isArray(arr))
    throw new Error(
      `첫번째 인수에는 배열이 와야해요. '${arr}'은/는 배열이 아니에요`
    );

  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    throw new Error('유효하지 않은 인덱스임');
  }
};
```

- 첫번째 인수인 `arr` 가 배열이 아니라면 `throw new Error` 처리
- 배열 내에 유효한 인덱스가 아니라면 `throw new Error` 처리

<br>

#### 위 두 함수를 기능별로 분리(모듈화)함

- 재사용성을 높이고 싶었습니당..

<br>
<hr>

#### 과제 수행 중 어려웠던 점 || 고민한 내용

- 처음에 함수 선언문으로 함수를 작성했다가, 함수 표현식으로 수정하였습니당. 여기서 `this`를 활용한다거나..하는 부분이 없어서 크게 차이점은 없지 않을까? 라고 생각은 해봤지만 정확하게 어떤 방법으로 작성해야 더 가독성이 좋을지? 어떤 방법을 썼을 때 어떠한 이점이 있는지?는 간단한 함수여서 그런지 여기서는 딱히 모르겠습니다..🤔 그냥 화살표 함수 연습이라 생각하며 바꿨습니다.. ☹
