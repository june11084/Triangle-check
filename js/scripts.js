$(document).ready(function() {
  $("#trianglecheck").submit(function(event){
    event.preventDefault();
    var sideA = parseInt($("input#A").val());
    var sideB = parseInt($("input#B").val());
    var sideC = parseInt($("input#C").val());

    if (sideA === sideB && sideA === sideC && sideB === sideC ) {
      $("#result").text("This is a Equilateral Triangle!")
    } else if(sideA === sideB || sideA === sideC || sideB === sideC){
      $("#result").text("This is a Isosceles")
    }
      else {
      $("#result").text("This is a Scalane")
    };

   });
});
