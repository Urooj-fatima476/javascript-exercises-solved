let score = 40;
let result = score >= 80 ? "Pass" : "Fail";
//the optional chaining operator (?.) is a feature introduced in ECMAScript 2020 (ES11). It is used to simplify the process of accessing properties of an object that may
 //be deeply nested, avoiding errors when trying to access properties on undefined or null values.
 const person = {
  name: 'John',
  address: {
    city: 'New York',
    zipCode: 10001
  }
};

// Without optional chaining
const zipCode = person.address ? person.address.zipCode : undefined;

// With optional chaining
const zipCodeWithOptionalChaining = person.address?.zipCode;

console.log(zipCode); // Output: 10001
console.log(zipCodeWithOptionalChaining); // Output: 10001
