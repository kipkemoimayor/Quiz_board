jQuery(document).ready(function(){
  $("button#intro").click(function(){
    $("form#register").show();
  });
  $("form#register").submit(function(event){
    event.preventDefault();
    $("#reg").hide();
    $("#re").hide();
    $("#body").show();
  })

});
