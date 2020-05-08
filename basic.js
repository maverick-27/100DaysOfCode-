let s = "XY";
let ns = "";
let n = 4;
for (let i = 1; i <= n; i++) {
  s = "XY" + (i * 2 - 1) + "" + i * 2;
  ns = ns + s;
  console.log(ns);
}
