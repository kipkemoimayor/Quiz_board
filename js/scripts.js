//This is the bussiness logic/back-end
function totalResults(question1,question2,question3,question4,question5,question6,question7,question8,question9){
  //empty array to stored values entered
  var total=[];
  total.push(question1,question2,question3,question4,question5,question6,question7,question8,question9);
  var result=0;
  for (var i=0;i<total.length;i++){
  result+=total[i];
  }
  return result;
};
//calculates the excat percentage
function percentageView(value){
  var showPercentage=(value/20)*100;
  return showPercentage;
}

//This is the user logic
jQuery(document).ready(function(){
  $("button#intro").click(function(){
    $("form#register").slideDown(1000)
    $("form#register").show();
  });

  $("form#register").submit(function(event){
    event.preventDefault();
    $("#reg").hide();
    $("#re").hide();
    $("#body").show();
    var name=$("#fullname").val();
    var mail=$("#email").val();
    $("#name").text(name);
    $("#name1").text(name);
    $(".card-title").text(name);
    $(".card-text").text(mail);
  });

  $("form#result").submit(function(event){
  event.preventDefault();
  var one=parseInt($("input:radio[name=one]:checked").val());
  var two=parseInt($("input:radio[name=two]:checked").val());
  var three=parseInt($("input:radio[name=three]:checked").val());
  var four=parseInt($("input:radio[name=four]:checked").val());
  var five=parseInt($("input:radio[name=five]:checked").val());
  var six=parseInt($("input:radio[name=six]:checked").val());
  var seven=parseInt($("input:radio[name=seven]:checked").val());
  var eigth=parseInt($("input:radio[name=eigth]:checked").val());
  var nine=parseInt($("input:radio[name=nine]:checked").val());
  var totalScore=totalResults(one,two,three,four,five,six,seven,eigth,nine);
  $("#final").text(totalScore);
  var percentage=percentageView(totalScore);
  $("#result").hide();
  $(".re").show();
  $(".score").show();
  $("#score").show();
  $("#showme").click(function(){
    $("#scores").slideDown(1000);
    $("#scores").show();
     $(".score").animate({
       transition:"400ms",
       left:"-250px"
    });
    $(".score").animate({
      transition:"500ms",
      right:"-250px"
   });
   $(".score").animate({
     transition:"700ms",
     left:"0",
     opacity:"0.8"
  });
  })
/*  $(".score").animate({
    transition:"400ms",
    right:"200px",
    opacity:0.8,

  });*/
  if(totalScore>=16 && totalScore<=20){
    $("#percentage").text("Your score is well above 80%, Congratulation")
    $("#message").text("congratulation You exently passed  your exams see you on the core program");
    $("#pass").text(percentage+"%");
  }
  else if (totalScore>=10 && totalScore<16) {
    $("#percentage").text("Your score is well above 50%!You have fairly passed");
    $("#message").text("congratulation You fairly passed your exams see you on the core program but pull up your socks");
    $("#fair").text(percentage+"%");
  }
  else {
    $("#percentage").text("You failed please redo the test again, Your score is less than 50%");
    $("#message").text("Sorry, You failed the test, unfortunately you can not cannot procced to next class");
    $("#fail").text(percentage+"%");
  }

})

  $("#showm").click(function(){
    $("#showmem").show();
  })


});
