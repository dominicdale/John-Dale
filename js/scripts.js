// Body load

$(window).on("load", function() {
    $("body").removeClass("loading");
});


// nav

$(function() {
  $(".menu").click(function(e){
    e.stopPropagation();
    $("nav").toggleClass("active");
  })
  $(document).click(function(event){
    if(!$(event.target).is("nav")){
      $("nav").removeClass("active");
    }
  })
});




// Gallery
/*
$(function() {
  $("figure").click(function(e){
    e.stopPropagation()
    $(".overlay").addClass("active");
  });
  $(".close-button").click(function(){
    $(".overlay").removeClass("active");
  });
  $(document).click(function(){
    $(".overlay").removeClass("active");
  })
});
*/
