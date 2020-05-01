function tipCalculator(bill) {
  if (bill > 50) {
    return bill * 0.2;
  } else return bill * 0.15;
}

let payment = [100, 200, 30];
let tip = [];
demo = tipCalculator(payment[0]);
tip.push(demo);
console.log(payment);
console.log(tip);
