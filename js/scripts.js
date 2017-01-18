var translate= function(word) {
  if (!word) {
    return alert("enter a word");
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
