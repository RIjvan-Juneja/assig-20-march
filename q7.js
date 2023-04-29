// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, "*");
    }
  
    set password(newPassword) {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (regex.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Invalid password");
      }
    }
  }
  
  const user1 = new User("johnDoe", "password123");
  console.log(user1.password); // Output: "***********"
  
  user1.password = "newpassword"; // Output: "Invalid password"
  