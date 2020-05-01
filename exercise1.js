markWeigth = 78.1;
nitWeight = 81;
flag = true;
markHeight = 170;
nitHeight = 168;

bmiMark = (markWeigth / markHeight) * markHeight;
bmiNit = (nitWeight / nitHeight) * nitHeight;

if (bmiMark > bmiNit) {
  flag = false;
}

if (flag) {
  console.log("NIT has more BMI ? ' Yes ");
} else console.log("Mark has More Weight ? ' Yes");
