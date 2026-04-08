// Q5 - Skipping Numbers

var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

var divisor = seed + 2;
var total = 0;
var m = 0;

while (total < N) {
  m++;
  if (m % divisor != 0) {
    total += m;
  }
}

alert(m + " " + total);
