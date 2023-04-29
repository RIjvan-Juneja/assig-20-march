// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  const person1 = new Person();
  console.log(person1.getDetails()); // Output: "Name: Unknown, Age: 0"
  
  const person2 = new Person("John Doe", 30);
  console.log(person2.getDetails()); // Output: "Name: John Doe, Age: 30"
  