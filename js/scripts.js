// Business logic
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","y","z"];


var firstVowel = function(word) {
  var firstLetter = word.charAt(0).toLowerCase();
  // if (vowels.includes(firstLetter)) {
  //   return true;
  // } else {
  //   return false;
  // }
  //   !!!!! IS THE SAME AS:
  // return vowels.includes(firstLetter);
  return vowels.includes(firstLetter);
};

var moveConsonant = function(word) {
  // use unshift and push methods to move a consonant to back of string
};

var addAY = function(word) {
  // add ay to end of word
  return word + "ay";
};

var translateWord = function(word) {
  // check for input
  if (word.length === 0) {
    alert("You must enter a word");
  }
  if (firstVowel(word)) {
    return addAY(word);
  }

};

// User Interface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var word =  $("input#translate").val();
    var result = translateWord(word);

    $("#output").text(result);
  });
});
