const arr = [
  1,
  3,
  function () {
    return "Hello World";
  },
];

// console.log(arr[2]());
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

console.log(typeof null);
console.log({} === null);

const o = new Object();
o.firstName = "hame";
o.lastName = "last";
o.greet = function () {
  console.log("Hi");
};

o2 = {};
lsa = "akst";
o2["fist"] = "hahhs";
o2[lsa] = "aka";
console.log(o2.akst);
