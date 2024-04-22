'use strict';

// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number) {
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//       console.log(sum);
//     }
//   };
//   return sum;
// }
// console.log(solution(20));


// Century From Year
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

// Power of two
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
// You may assume the input is always valid.

// function isPowerOfTwo(n) {
//   if (n == 1) {
//     return true;
//   }
//   if (n < 1) {
//     return false;
//   }
//   return isPowerOfTwo(n / 2);
// }

// function isPowerOfTwo(n) {
//   let result;
//   result = Number.isInteger(Math.log2(n));
//   console.log(result);
//   return result;
// }

// isPowerOfTwo(1024); // -> true
// isPowerOfTwo(4096); // -> true
// isPowerOfTwo(333);  // -> false