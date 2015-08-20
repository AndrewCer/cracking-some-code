// var inputString = "Mr John Smith    "
//try with an array
module.exports = function (inputString) {
    var accumArray = [];
    for (var i = 0; i < inputString.length; i++) {
      accumArray.push(inputString[i]);
    }
    for (var i = 0; i < accumArray.length; i++) {
      if (accumArray[accumArray.length-1] === ' ') {
        accumArray.pop()
      }
      else {
        break
      }
    }
    for (var i = 0; i < accumArray.length; i++) {
      if (accumArray[i] === ' ') {
        accumArray[i] = '%20'
      }
    }
    // console.log(accumArray.join(',').replace(/,/g, ''));
    return accumArray.join(',').replace(/,/g, '');
  }

// for (var i = 0; i < inputString.length; i++) {
//   if (inputString[i] === ' ') {
//
//   }
// }
//strings are immutable, must return a new string with changes
//.replace() maybe?

//try to find duplication in spaces and replace that with
// var accum = '';
// for (var i = 0; i < inputString.length; i++) {
//   if (inputString[i] === accum) {
//     console.log(inputString[i].replace(inputString[i], '.'));
//   }
//   accum = inputString[i];
// }



// for (var i = 0; i < inputString.length; i++) {
//   accumArray.push(inputString[i]);
// }
// for (var i = 0; i < accumArray.length; i++) {
//   if (accumArray.pop() === ' ') {
//     accumArray.pop()
//     console.log(accumArray);
//   }
//   else {
//     break
//   }
// }


//only once
// console.log(inputString.replace(' ', '%20'));

// var newString = inputString.replace(' ', '%20')
// console.log(newString.replace(' ', '%20'));

// var newString = inputString.replace(/ /g, '%20');
// console.log(newString);

//must find last occurence of a letter
// console.log(newString.lastIndexOf('h'));

// var accum = '';
// for (var i = 0; i < newString.length; i++) {
//   accum = newString[i];
//   console.log(accum);
// }
