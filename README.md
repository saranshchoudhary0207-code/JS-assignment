# JS-assignment
# JS Assignment - CSE 106 Fundamentals of Web Design

## Assignment 4 - JavaScript Solutions

Q1 - Digit Gatekeeper

**Steps I followed:**
1. Take input L, R, K using prompt()
2. Loop through every number from L to R
3. Check if number is divisible by K
4. Check if number has no zero digit in it
5. Calculate sum of digits, then check if that sum is a prime number
6. If all 3 conditions pass, increase count by 1
7. Show final count using alert()
   
 Q2 - Roll-Seed Lock

**Steps I followed:**
1. Take input N and seed using prompt()
2. Run a loop exactly 3 times:
   - If current number is even → divide by 2 then add seed
   - If current number is odd → multiply by 3 then subtract seed
3. After 3 steps, check two things:
   - Is the number between 100 and 999?
   - Is the middle digit equal to seed? (get middle digit using: Math.floor(n/10) % 10)
4. If both true → alert YES with the number, else alert NO

---

 Q3 - Mirror Corridor 

**Steps I followed:**
1. Take input N and K using prompt()
2. Loop X from 0 to 100000
3. For each X, calculate num = N + X
4. Convert num to string, reverse it, check if it equals original (palindrome check)
5. Also check if num is divisible by K
6. If both conditions true, alert X and stop the loop
7. If nothing found in range, alert -1

---

 Q4 - Fare Calculator

**Steps I followed:**
1. Take base, distance, minutesLate, seed using prompt()
2. Start fare = base + 7 * distance
3. If minutesLate > 15, add 20 to fare
4. If distance > 10, add 10% of fare (use Math.floor for whole number)
5. If seed is odd, subtract seed. If seed is even, add seed
6. Round fare up to nearest multiple of 5:
   - If fare % 5 != 0 → add (5 - fare % 5)
7. Show final fare using alert()

---
 Q5 - Skipping Numbers

**Steps I followed:**
1. Take N and seed using prompt()
2. Calculate divisor = seed + 2
3. Start total = 0, m = 0
4. Keep looping: increase m by 1 each time
5. If m is NOT divisible by divisor, add m to total
6. Stop when total >= N
7. Show m and total using alert()

 Q6 - Contest Score Judge 

**Steps I followed:**
1. Take a (correct), b (partial), c (wrong) using prompt()
2. Calculate score = 3*a + b - 2*c
3. If score is negative, set it to 0
4. If total questions (a+b+c) > 50, subtract 10 from score
5. If score drops below 0 again, set to 0
6. If score >= 60 → PASS, else → FAIL
7. Show score and status using alert()
