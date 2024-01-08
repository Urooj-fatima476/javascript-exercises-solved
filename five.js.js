function calculateTax(income) {
    const taxRate = income > 50000 ? 0.2 : income > 30000 ? 0.15 : 0.1;
    const taxAmount = income * taxRate;
    return taxAmount;
  }
  
  const income = 40000;
  const tax = calculateTax(income);
  
  console.log(`Tax amount for an income of $${income}: $${tax}`);
  const car = {
    make: 'Toyota',
    model: 'Camry',
    startEngine: function () {
      console.log('Engine started!');
    }
  };
  
  car.startEngine(); // Output: "Engine started!"
// Regular function as a method
const regularFunctionObject = {
    regularMethod: function () {
      console.log(this); // Refers to regularFunctionObject
    }
  };
  
  // Arrow function as a method (not recommended)
  const arrowFunctionObject = {
    arrowMethod: () => {
      console.log(this); // Refers to the global object (or undefined in strict mode)
    }
  };
      