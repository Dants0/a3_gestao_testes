const fs = require('fs');

class User {
  constructor(email, password, confirmedPassword) {
    this.email = email;
    this.password = password;
    this.confirmedPassword = confirmedPassword;
  }

  createUser() {
    try{
      const data = {
        email: this.email,
        password: this.password,
        confirmedPassword: this.confirmedPassword,
      };
      fs.writeFileSync('./db/users.json', JSON.stringify(data, null, 2), 'utf8');
    }catch(e){
      throw new Error ("Couldn't create user" + e);
    }
  }
}

const user = new User("John", 123, 123);
user.createUser();
