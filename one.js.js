//for...of loop:
//Iterates over iterable objects like arrays, strings, maps, sets, etc.
//Use case: Ideal for iterating over values in arrays or other iterable objects.
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}
//for...in loop:
//Iterates over the enumerable properties of an object.
//Use case: Primarily for iterating over object properties.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}
function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; // To handle division by zero, return 0 for an empty array
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }
  
  const numbers = [10, 20, 30, 40, 50];
  const average = calculateAverage(numbers);
  
  console.log(average); // Output: 30
  