// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?
It would log the String value "India 2023" to the variable "cohort"

const cohort = "India 2023"
// console.log(cohort.split(" "))

// a) Your answer:It would log the string value "India 2023" to the variable "cohort"
// b) Verify and explain:this line declares a constant variable named cohort  and assigns it the value "India 2023"


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:const greeter = (name) => { return `Hello, ${name}!`;} console.log("greeter("LEARN Student"));
// b) Verify and explain:the greeter function takes a name parameter and returns a string that incorperates the name.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:const onlyOdds = [11, 12, 13, 14]
// b) Verify and explain:only odds method is used to include only the elements thats satisfy the condition specified in the arrow function

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:const myCodingSkills=
// b) Verify and explain:the object is defined


// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:it will log an instance of the `Learn` class with the properties `student` ,`cohort`, and `year` to the console.
// b) Verify and explain:the output will look like this Learn { student: ` George`, cohort: `India`, year: 2023}

