/**
 * Part 1:
 *    What will print and why? 1, 2, undefined
 *      The first console.log(a) is not inside any function and prints the value of the a defined globally
 *      The second console.log(a) is encountered inside the call of y(), where a is declared to be equal to 2
 *      The third console.log(a) is encountered inside the call of x(), where a is not set to a particular value
 *    What will change if we delete line 15? Why? It will take a as the globally defined value of a and print 1, 2, 1
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = (a) => {
  console.log(a);
}

const y = () => {
  let a = 2;
  console.log(a);
  x(a);
}

let a = 1;
console.log(a);
y();
