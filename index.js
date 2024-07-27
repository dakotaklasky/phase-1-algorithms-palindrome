function isPalindrome(word) {
  // Write your algorithm here
  if(word.length <= 1){
    return true
  }
  else{
    backwardsWord = []
    for(let i=0; i<word.length; i++){
      backwardsWord.unshift(word[i])
    }
    if(word === backwardsWord.join("")){
      return true
    }
    else{
      return false
    }
  }
}



/* 
  Add your pseudocode here
  reverse each word
    create a new string
    use pop to add each element to new array
  compare to the given word
  if they are equal then submit true, else false

  cases:
  empty string
  one letter

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

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
