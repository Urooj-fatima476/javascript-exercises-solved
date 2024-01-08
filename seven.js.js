
//For Loop
for (let j = 0; j < 5; j++) {

    console.log(j);
  }
  //While Loop
  let A = 0;
  while (A < 5) {
    console.log(A);
    A++;
  }
  //Do While Loop
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  //Using Optional Chaining within a Loop:
  const students = [
    { name: 'Alice', grades: { math: 90, english: 85 } },
    { name: 'Bob', grades: { math: 80 } },
    { name: 'Charlie' }
  ];
  
  for (const student of students) {
    const mathGrade = student?.grades?.math ?? 'N/A';
    console.log(`${student.name}'s math grade: ${mathGrade}`);
  }
        