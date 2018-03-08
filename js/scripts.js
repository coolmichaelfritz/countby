// Business Logic












// UI Logic
$(document).ready(function() {
  $("form#countBy").submit(function(event) {
    event.preventDefault();
    debugger;
    var bigNumber = parseInt($("input#bigNumber").val());
    var smallNumber = parseInt($("input#smallNumber").val());
    var multiples = [];

      for (var index = smallNumber; index <= bigNumber; index += smallNumber) {

        if (bigNumber % index === 0) {
          multiples.push(index);
        };


      $("#results").text(multiples);
      };
  });
});
