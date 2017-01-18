
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t","v","x","y","z"];

var translate = function(word) {

  if (word && word.length != 0) {
    return word;
  }else {
     alert("enter a word");
  }
}


$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var word=  $("input#translate").val();
    var result= translate(word);


    $("#output").text(result);
  });
});
