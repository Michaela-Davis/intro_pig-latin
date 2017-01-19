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

var translateWord = function(word) {
  // check for input
  if (word.length === 0) {
    alert("You must enter a word");
  }
  if (firstVowel(word)) {
    alert("the first letter is a vowel");
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
