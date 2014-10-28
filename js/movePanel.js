$(function(){
  activenumber = 1;
  isActive = true;
  $('.tab').on("click",function(){
    if(isActive){
      isActive = false;
      number = $(this).data("number");
      if(activenumber==number){
        isActive = true;
      }else if(activenumber<number){
        $("#tab"+activenumber).animate({
          left: '-100%'
        }, 600, function() {
          $(this).css({"left":"auto"});
          $(this).removeClass("active");
        });
        $("#tab"+number).css({"right":"-100%"});
        $("#tab"+number).addClass("active");
        $("[data-number="+number+"]").addClass("active");
        $("#tab"+number).animate({
          right: '0'
        }, 600, function() {
          $(this).css({"left":"auto"});
          isActive = true;
        });
      }else{
        $("#tab"+activenumber).animate({
          left: '100%'
        }, 600, function() {
          $(this).css({"left":"auto"});
          $(this).removeClass("active");
        });
        $("#tab"+number).css({"right":"100%"});
        $("#tab"+number).addClass("active");
        $("#tab"+number).animate({
          right: '0'
        }, 600, function() {
          $(this).css({"left":"auto"});
          isActive = true;
        });
      }
     $("[data-number="+activenumber+"]").removeClass("active");
      activenumber = number;
    }
  });
});
