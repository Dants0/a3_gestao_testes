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
 
      if(data.email && data.password && data.confirmedPassword == undefined || null){
        throw new Error ("Couldn't create because have a missing information")
      }else{
        return "Register successfully";
      }
    }catch(e){
      throw new Error ("Couldn't create user" + e);
    }
  }
}

module.exports = User;