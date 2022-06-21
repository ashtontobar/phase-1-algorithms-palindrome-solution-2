// Make it Clean // 

// function isPalindrome(word) {
// const regExp = /[^A-Za-z0-9]/g
// const lowercaseWord = word.toLowerCase().replace(regExp, '')
// const reverseWord = lowercaseWord.split('').reverse().join('')

// return reverseWord === lowercaseWord
// }


// Original Function // 
function isPalindrome(word) {
  // Regular Expression (patterns used to match character combos)
  // can also use * /[\W_]/g *
  const regExp = /[^A-Za-z0-9]/g
  
  // .toLowerCase() => makes the word/string lowercase
  // .replace(regExp, '') => removes spaces & punctuation
  const lowercaseWord = word.toLowerCase().replace(regExp, '')
  
  // .split() => taking the word/string & splitting it into individual letters
  // .reverse() => reverse the word/string/letters after splitting
  // .join() => joins the reverse word/string/letters
  const reverseWord = lowercaseWord.split('').reverse().join('')

  // checking to see if the lowercaseWord & reverseWord are exactly the same (palindrome)
  return reverseWord === lowercaseWord
}

/* 
  Write a function that will return true if the word that is passed
  in as an argument is a palindrome (the same word forward & backward - anna === anna, bob === bob, etc.)

  reverse the string
  if the input/argument is the exact same when reversed it will return true
  else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
