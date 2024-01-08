//Closures in JavaScript allow functions to retain access to variables from their outer (enclosing) scope even after the outer function has finished executing. 
//A closure is created when a function is defined inside another function and refers to variables from the outer function.
function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closureExample = outerFunction();
  closureExample(); // Output: "I am from the outer function"
  const student = {
    name: 'John',
    age: 20,
    grades: [85, 90, 78, 95, 88],
  
    calculateAverage: function () {
      if (this.grades.length === 0) {
        return 0; // To handle division by zero, return 0 for an empty array
      }
  
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    }
  };
  
  const averageGrade = student.calculateAverage();
  console.log(`${student.name}'s average grade is: ${averageGrade}`);
    