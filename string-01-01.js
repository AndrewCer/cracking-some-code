//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?

var word = 'abcd';
var unique = true;

var letter;

console.log(word);
for (var i = 0; i < word.length; i++) {
  if (word[i] === word[i + 1]) {
    unique = false;
    break
  }
  for (var j = 0; j < word.length; j++) {
    letter = word.slice(j + 1, word.length)
    if (word[i] === letter[i]) {
      unique = false;
      break
    }
  }
}
if (unique === true) {
  console.log('all characters ARE unique');
}
else {
  console.log('all characters are NOT unique');
}
