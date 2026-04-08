// Q3 - Mirror Corridor

var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

function isPalindrome(n) {
  var s = n.toString();
  var rev = s.split("").reverse().join("");
  return s == rev;
}

var ans = -1;

for (var x = 0; x <= 100000; x++) {
  var num = N + x;
  if (isPalindrome(num) && num % K == 0) {
    ans = x;
    break;
  }
}

alert(ans);
