let person = {
  name: "abc",
  age: 21,
  isAdult() {
    console.log("Yes I am young and Strong");
  },
};

// display(Object.keys(person));
for (property in person) {
  console.log(property);
}
