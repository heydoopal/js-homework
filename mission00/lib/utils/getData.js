export const getNumberAtArray = (arr, index) => {
  if (!Array.isArray(arr))
    throw new Error(
      `첫번째 인수에는 배열이 와야해요. '${arr}'은/는 배열이 아니에요`
    );

  if (typeof index !== 'number' || !Number.isInteger(index)) {
    throw new TypeError(
      `두번째 인수에는 정수형 숫자가 와야해요. '${index}'은/는 유효하지 않은 인덱스에요`
    );
  }

  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    throw new Error('유효하지 않은 인덱스임');
  }
};

// 범쌤 코드
// tip!
// 순서를 만들고 체크하면서 한 단계씩 함수 만들어보기

// 1. arr 변수가 배열인지 확인하기
// 2. 0보다 크거나 같음 && 배열의 길이보다 작을 때

// function getNumberAtArray(arr, index){

//   if(Array.isArray(arr)){
//     if(index >= 0 && index < arr.length){
//       return arr[index];
//     }
//     else{
//       throw new Error('배열에 없는 index입니다.');
//     }
//   }
//   else{
//     throw new TypeError('getNumberAtArray 함수의 첫 번째 인수는 배열 타입 이어야 합니다.')
//   }

// }

export const getValueAtObject = (obj, key) => {
  if (typeof obj !== 'object' || Object.is(obj, null))
    throw new Error(
      `첫번째 인수에는 객체가 와야해요. '${obj}'은/는 객체가 아니에요`
    );
  if (typeof key !== 'string') {
    throw new TypeError(
      `두번째 인수에는 문자열이 와야해요. '${key}'은/는 유효하지 않은 키에요`
    );
  }

  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    throw new Error(`'${key}'라는 key가 해당 객체에 존재하지 않아요`);
  }
};

// 범쌤 코드
// function getValueAtObject(obj,key){

//   if(typeof key !== 'string'){
//     throw new TypeError('getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
//   }

//   // if(typeof obj === 'object'){
//   //   if(Object.prototype.hasOwnProperty.call(obj,key)){
//   //     return obj[key];

//   if(isObject(obj)){
//     if(Object.prototype.hasOwnProperty.call(obj,key)){
//       return obj[key];
//     }
//     else{
//       throw new Error(`getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`);
//     }
//   }
//   else{
//     throw new TypeError('getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다.');
//   }

// }

// 하지만 이 방법으로는 타입을 확실하게 판별하기 어려움!!
// 좀 더 정확한 판별로 구분해보장
function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
  );
}
