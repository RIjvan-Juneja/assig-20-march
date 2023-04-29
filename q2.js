/* Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs. */

function getPerson(person) {
    try {
      if (typeof person !== "object" || person === null || !("name" in person) || !("age" in person)) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (err) {
      return err.message;
    }
}
  
const person1 = { name: "John Doe", age: 30 };
const person2 = { name: "Jane Smith" };

console.log(getPerson(person1)); // Output: "Name: John Doe, Age: 30"
console.log(getPerson(person2)); // Output: "Invalid parameter type"
console.log(getPerson(null)); // Output: "Invalid parameter type"
console.log(getPerson("John")); // Output: "Invalid parameter type"
