const o = {
  a: "a",
  b: "b",
  c: {
    key: "val",
  },
};

const o2 = Object.assign({}, o);
o2.c.key = "a1213123";

console.log(o2.c.key);

function deepCopy(obj) {
  const keys = Object.keys(obj);
  const newObject = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (obj[key] === "object") {
      newObject[key] = deepCopy(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}

const o3 = deepCopy(o);
console.log(o3);
