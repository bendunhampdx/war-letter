$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    const person1Input = $("input#person1").val();
    $(".name").text(person1Input);
    $("#letter").show();
  });
})