$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var word=  $("#translate").val();
    var result= translate(word);

    var translate= function(word) {
      
    }
  });
});
