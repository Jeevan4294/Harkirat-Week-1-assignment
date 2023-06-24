/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var strTest = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("");
  var strLen = strTest.length;
  console.log(strLen/2);
  for(var i=0; i < (strLen-1)/2 ; i++){
    if( strTest[i] != strTest[strLen - 1 - i]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('Able, was I ere I saw Elba!'))
console.log('Able, was I ere I saw Elba!'.length)

module.exports = isPalindrome;
