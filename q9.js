// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
// returned function should take another number as an argument and return true if the number is in the array, and
// false otherwise.

function numberChecker(numbers) {
    return function(number) {
      return numbers.includes(number);
    }
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(arr);
  console.log(checkNumber(3)); // Output: true
  console.log(checkNumber(6)); // Output: false
  