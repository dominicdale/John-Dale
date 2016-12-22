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

$(function(){
  if (document.body.scrollTop > 94) {
    $("header").addClass("shadow");
  }
});
