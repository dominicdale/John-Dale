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


// header shadow

$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if (scroll >= 94) {
    $("header").addClass("shadow");
  } else {
    $("header").removeClass("shadow");
  }
});
