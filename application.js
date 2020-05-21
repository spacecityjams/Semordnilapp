const fs = require("fs");

fs.readFile('./dictionary/test-words.txt', function (err, data) {
  if (err) {
     return console.error(err);
  }
  const wordArray = data.toString().split('\r\n');
    let charArray = [];
    for (word in wordArray) {
      charArray += word.split('')
    }


  console.log(wordArray);
  console.log(charArray);
});