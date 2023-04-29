// Create a prototype object called Student with a property name. Add a method called printDetails to the
// prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
// name "Mithun" and call the printDetails method.

// Define the Student prototype object
const Student = {
    name: "",
    printDetails: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  // Instantiate a Student object with the name "Mithun"
  const student1 = Object.create(Student);
  student1.name = "Mithun";
  
  // Call the printDetails method
  student1.printDetails(); // Output: "Hello, my name is Mithun"
  