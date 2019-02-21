jQuery(document).ready(function(){
  $("button#intro").click(function(){
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
  })
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
  //empty array to stored values entered
  var total=[];
  total.push(one,two,three,four,five,six,seven,eigth,nine);
  var result=0;
  for (var i=0;i<total.length;i++){
  result+=total[i];
  }
  $("#final").text(result);
  $("#result").hide();
  $(".re").show();
  $(".score").show();
  $(".score").animate({
    transition:"400ms",
    left:"350px",
    opacity:0.8,

  });
  if(result>=16 && result<=20){
    $("#percentage").text("Your score is well above 80% Congratualation")
  }
  else if (result>=9 && result<16) {
    $("#percentage").text("Your score is well above 50%!You have fairly passed");
  }
  else {
    $("#percentage").text("You failed please redo the test again, Your score is less than 50%");
  }

})



});
