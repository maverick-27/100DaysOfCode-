function jimmy(firstName, secondName) {
  let person = {
    firstName,
    secondName,
  };
  display(person);
}

jimmy("Hello Joshji", "joshi");
function display(person) {
  console.log(person.firstName);
  console.log(person.secondName);
}
