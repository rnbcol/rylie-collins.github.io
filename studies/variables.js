/**
 * VARIABLES
 * 
 * 0: 5 sentences (summary of sorts)
 * 
 * 1: declaration and assignment (desc)
 * 
 * 2: var, let, const
 * var - globally scoped (can be used anywhere in the code), can be declared without a value, can be reassigned
 * let - can be block scoped (bound by {} - CANNOT be used anywhere in the code), can be declared without a value, can be reassigned
 * const - block scoped (bound by {} - CANNOT be used anywhere in the code), CANNOT be declared without a value, CANNOT be reassigned

 * 3: hoisting (desc)
 * 
 */

// 1: declaration and assignment //
// code ex



// 2: var, let, const //
/// VAR ///
var x; // initializing without a value
console.log(x); // declaring without a value and logging directly after will print undefined to the console
x = 1; // initializing - giving it a value
x = 5; // reassigning
// note - there is no need to reuse the keyword everytime you reassign


/// LET ///
let y; // declaring without a value
y = 1; // initialize
y = 5; // reassigning

console.log(y); // global y, will print 5
if (true) {
  let y = 7;
  console.log(y) // blocked y, will print 7
} // while they do have the same name, they are treated as two different variables - they were declared in two separate scopes
console.log(y); // global y again, will print 5


/// CONST ///
// const z; // declaring without a value is not allowed for constants
const z = 1; // should only be used for constants when youre sure that this value wont need to change
z = 5; // this won't work because z is already declared as a constant and cannot be redefined



// 3: hoisting
// code ex