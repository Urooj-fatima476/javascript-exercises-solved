// Deep copy using JSON.parse and JSON.stringify
const originalObject = { a: 1, b: { c: 2 } };
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));

console.log(deepCopyObject);
// Shallow copy using Object.assign
const originaalObject = { a: 1, b: { c: 2 } };
const shallowCopyObject = Object.assign({}, originaalObject);

console.log(shallowCopyObject);
// Reference copy
const originallObject = { a: 1, b: { c: 2 } };
const referenceCopyObject = originallObject;

console.log(referenceCopyObject);

//. Loop using Ternary Operator
const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(number => {
  const message = number % 2 === 0 ? 'Even' : 'Odd';
  console.log(`${number} is ${message}`);
});
