////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step=1) {
  let output = [];
  if (start === end) {
    return output;
  } if (step > 0) {
      for (let i = start; i <= end; i += step)
      output.push(i);
    } else {
      for (let i = start; i >= end; i += step)
      output.push(i);
  }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(nums) {
  var total = 0;
  for (var i in nums) {
    total = total + nums[i];
  }
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  var reversed = []; // to return later
  for (let i = 0; i < arr.length + 1; i++) {
    reversed.push(i);
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace() {

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;

  for (let i = array.length - 1; i >= 0; i--) {
    rest = { value: array[i], rest: rest };
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array=[]) {
  // base
  if (list.rest === null) {
    array.push(list.value);
    return array;
  }
  // recursion
    // how to update array
  array.push(list.value);

  return listToArray(list.rest, array);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  // base
  
  // recursion
  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // determine if x and y ARE NOT objects
  if (typeof x !== 'object' && typeof y !== 'object') {
    return x === y;
  }
  // determine if x OR y is not an object
  if (typeof x !== 'object' || typeof y !== 'object') {
    return false;
  }
  // create arrays of each inputs keys 
  let xKeys = Object.keys(x); // ['a']
  let yKeys = Object.keys(y); // ['a']
  if (xKeys.length !== yKeys.length) {
    return false;
  }
  // iterate to determine if array keys match and value at keys match
  for (let i = 0; i < xKeys.length; i++) {
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])) { // determine if current key is NOT included in yKeys
      return false;
    }
  }

  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
