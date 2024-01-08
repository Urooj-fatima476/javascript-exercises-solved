const person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
  };
  
  for (const property in person) {
    console.log(`${property}: ${person[property]}`);
  }
  const numberrs = [1, 2, 3, 4, 5];

  for (const num of numberrs) {
    if (num === 3) {
      break; // Stop the loop when the condition is met
    }
    console.log(num);
  }
  const numbers = [1, 2, 3, 4, 5];

  for (const num of numbers) {
    if (num % 2 === 0) {
      continue; // Skip even numbers
    }
    console.log(num);
  }
      