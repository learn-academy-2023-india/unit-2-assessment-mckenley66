// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
// take array and return expected output with each index mulitplied by three
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// multiplyByThree.test.js


  


// b) Create the function that makes the test pass.

// Pseudo code:
// input array
// loop through array and mulitply each index by three
// return new array with each value multiplied by three



  



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// yourFileName.js

// yourFileName.test.js

function isDivisibleByThree(number) {
    // Check if the number is divisible by three
    return number % 3 === 0;
  }
  
// variables [15,0,-7]


// Jest test cases

const { isDivisibleByThree } = require('./divisibleByThree.test.js');

test('object1: { number: 15 } is divisible by three', () => {
  expect(isDivisibleByThree({ number: 15 })).toBe(true);
});

test('object2: { number: 0 } is divisible by three', () => {
  expect(isDivisibleByThree({ number: 0 })).toBe(true);
});

test('object3: { number: -7 } is not divisible by three', () => {
  expect(isDivisibleByThree({ number: -7 })).toBe(false);
});



  




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//capitalzed_array = [word.capitalize( for word in word_array]
  //  return capitalized_array)]
  // a) Create a test with expect statements for each of the variables provided.
//expect(randomNouns1) . to.be.an('array');
//expect(variables) . to . have . lengthof(5);
//expect(randomNouns2) . to.have.lengthof(4) ; 
//expect( randomNouns2).to.have.lengthof(4)
//const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

  const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];

  const capitalizedWords = randomNouns1.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
  console.log(capitalizedWords);



  const randomNouns1 = {["streelamp", "potato", "teeth", "conclusion", "nephew"]}
// Expected output: " true "
// Expected output: " 5"

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
console.log(Array.isArray(randomNouns1));
console.log(randomNouns1.length);


const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];

const capitalizedWords = randomNouns2.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
console.log(capitalizedWords);

const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
// Expected output: " true "
// Expected output: "4"

const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
console.log(Array.isArray(randomNouns2));
console.log(randomNouns2.length);






