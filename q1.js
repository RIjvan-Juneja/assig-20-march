/* 1. Type Conversion.
Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output. */

function convertToNumber(str) {
    try {
      const num = Number(str);
      if (isNaN(num)) {
        throw new Error("Invalid number");
      }
      return num;
    } catch (err) {
      return err.message;
    }
  }
  console.log(convertToNumber("42")); // Output: 42
  console.log(convertToNumber("3.14")); // Output: 3.14
  console.log(convertToNumber("hello")); // Output: "Invalid number"
  console.log(convertToNumber("")); // Output: "Invalid number"
    