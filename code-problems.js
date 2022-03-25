
//Sum Zero 
//Runtime: O(n^2)
//Space Complexity: O(n^2)
let arr = [15, 2, -4, 10, 4];

let value = false;


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i] + arr[j] === 0) {
        value = true
      } 
    }
  }
}

console.log(value);


//Unique Characters 
//Runtime: O(n^2)
//Space Complexity: O(n^2)
function hasUniqueCharacters(str)
{
  for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
  
    return true;
}

console.log(hasUniqueCharacters("asdfgdhjkl"))


//Pangram Sentence
//Runtime: O(n)
//Space Complexity: O(n)
function checkPangram(str) {
    str = str.toLowerCase();
    
     const { length } = str;
     const alph = 'abcdefghijklmnopqrstuvwxyz';
     const alphArr = alph.split('');
    
     for(let i = 0; i < length; i++){
        const el = str[i];
        const index = alphArr[i];
        if(index !== -1){
           alphArr.splice(index, 1);
        };
     };
     return !alphArr.length;
  };
  
  
  console.log(checkPangram("The quick brown fox jumps over the lazy dog!"))
  
  console.log(checkPangram("Test"))


//Longest Word
//Runtime: O(n)
//Space Complexity: O(n)
function find_longest_word(str) {
    let longestWord = str.split(', ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  console.log(find_longest_word("and, correct, false, test"));