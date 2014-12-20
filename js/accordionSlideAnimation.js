// code modified from:
// http://foundation.zurb.com/forum/posts/492-easing-effects-for-top-bar,-accordion-and-tabs

$(document).ready(function() {
  $(".accordion").on("click", "dd", function () {
   
    if(!$(this).hasClass("active")) {
      $(this).find(".content").slideToggle("medium");
    }
  });
});