
var correct =function(one ,two ,three ,four ,five){
   return one + two + three + four + five;
}

$(document).ready(function() {
    $("form#que").submit(function(event) {

    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var finalCorrect =correct(question1,question2,question3,question4,question5);

    $(".after-submit").text(finalCorrect);
       event.preventDefault();
       $("#after-submit").show();
  });

  $("#be").click(function(){
    $("#que").hide();
  });
  $("#ba").click(function(){
    $("#que").show();
  });
});
