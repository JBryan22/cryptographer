$(document).ready(function() {
  $("#cryptographer").submit(function(event) {
    event.preventDefault();
    var sentenceInput = $("#sentence").val();
    $(".output").text(cryptographer(sentenceInput));
  });
});

var cryptographer = function(sentence) {
  sentence = sentence.replace(/[^a-zA-Z]/g, '').split('');
  var squareNum = 1;
  var returnArray = [];
  var returnString = '';
  while (true) {
    if (sentence.length > squareNum * squareNum) {
      squareNum++;
    } else {
      break;
    }
  }
  for (i = 0; i < squareNum - 1; i++) {
    returnArray.push(sentence.splice(0,squareNum));
  }

  for (innerArray = 0; innerArray < returnArray.length; innerArray++) {
    for (letter = 0; letter < returnArray[innerArray].length; letter++) {
      returnArray[innerArray][letter] = [returnArray[innerArray][letter]];
    }
  }

  var spotInString = 0;

  for (column = 0; column < returnArray[0].length; column++) {
    for (row = 0; row < returnArray.length; row++) {
      if (returnArray[row][column]) {
        returnString += returnArray[row][column];
        spotInString++;
        if (spotInString % 5 === 0) {
          returnString += ' ';
        }
      }
    }
  }
  return returnString;
}
