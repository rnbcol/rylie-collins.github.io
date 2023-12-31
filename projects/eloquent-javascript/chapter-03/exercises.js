////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else if (num1 < num2) {
    return num1;
  } else if (num1 === num2) {
    return 0;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  if (num < 0) {
    return false;
  } else if (num % 2 === 1) {
    return false;
  } else if (num % 2 === 0) {
    return true;
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, letter) {
  var bee = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      bee.push(string[i])
    }
  }
  var num = bee.length;
  return num;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  var bee = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      bee.push(string[i])
    }
  }
  var beans = bee.length;
  return beans;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
