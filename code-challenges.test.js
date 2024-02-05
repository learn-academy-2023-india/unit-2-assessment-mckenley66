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


  // b) Create the function that makes the test pass.

// Pseudo code:
// input array
// loop through array and mulitply each index by three
// return new array with each value multiplied by three



  



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

//create a function that checks if a number is divisble by three or not.
const isDivisibleByThree = (number) => {
  return number % 3 === 0;
}

// Test cases
  describe("isDivisibleByThree", () => {
  it("should return true for a number divisible by three", () => {
    const number1 = 15;
    // Expect: 15 to be true
    expect(isDivisibleByThree(number1)).toEqual(true);
  });

  it("should return false for 0", () => {
    const number2 = 0;
    // Expect: 0 to be false
    expect(isDivisibleByThree(number2)).toEqual(false);
  });

  it("should return false for a number not divisible by three", () => {
    const number3 = -7;
    // Expect: -7 to be false
    expect(isDivisibleByThree(number3)).toEqual(false);
  });
});

//psuedo code 
//create a function that divides each number by three
//return values true if number is divisible by three else false if number is not divisible by three






// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
const randomNouns = (wordArray) => {
  return wordArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
};
 
// a) Create a test with expect statements for each of the variables provided.
//expect(randomNouns1) . to.be.an('array');
//expect(variables) . to . have . lengthof(5);
//expect(randomNouns2) . to.have.lengthof(4) ; 
//expect( randomNouns2).to.have.lengthof(4)

// jest test case
describe ("randomNouns", () => {
  it ("it takes in an array of words and returns a new array with the first letter of each word capitalized and returns the length of the array", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
 //expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
 expect(randomNouns(randomNouns1)).toEqual(["Streetlamp","Potato", "Teeth","Conclusion","Nephew"]);

 const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
//expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
expect(randomNouns2(randomNouns2)).toEqual(["Temperature","Database","Chopsticks","Mango"]);
  });

  it("should return the length of array", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
    //expected output: 5
    expect(randomNouns(randomNouns1).length).toEqual(5);
 
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
    //expected output: 4
    expect(randomNouns(randomNouns2).length).toEqual(4);
 });
});
//pusedo code
//write a function that takes in an array and returns a new array with each word capitalized
//check the length of the array
