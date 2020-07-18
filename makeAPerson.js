var Person = function(firstAndLast) {

  let split = firstAndLast.split(" ");
  let firstName = split[0];
  let lastName = split[1];
  // scoped variables can be used to mimic private variables
  // this.variables are public variables

  this.getFullName = function() {
    return firstName + " " + lastName;
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.setFirstName = function (n) {
    firstName = n;
  };

  this.setLastName = function (n) {
    lastName = n;
  };

  this.setFullName = function (n) {
    let split = n.split(" ");
    firstName = split[0];
    lastName = split[1];
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
