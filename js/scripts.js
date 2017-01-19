// Business logic
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s", "t","v","x","y","z"];

var translate = function(word) {
  // if character at index 0 of your word is NOT included in consonants then return word
  if (!consonants.includes(word.charAt(0))) {
    return word + "ay";
  // } else if ((word.length !== 0) && (word !== " ")) {
  //   alert("first");
  //   return word;
   } else {
     alert("This is not a word. Please enter one.");
  }
}

// User Interface Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var word=  $("input#translate").val();
    var result= translate(word);


    $("#output").text(result);
  });
});
