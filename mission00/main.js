import { getNumberAtArray, getValueAtObject } from './lib/utils/getData.js';

const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland',
};

console.log(getValueAtObject('person', 'name')); // Error
// Error: 첫번째 인수에는 객체가 와야해요. 'person'은/는 객체가 아니에요

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age')); // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
console.log(getValueAtObject(person, 'country')); // Error !

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray('test', 2)); // Error
// Error: 첫번째 인수에는 배열이 와야해요. 'test'은/는 배열이 아니에요

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
