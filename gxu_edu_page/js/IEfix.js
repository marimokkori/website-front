$(function() {
       var zIndexNumber = 1000;
       // Put your target element(s) in the selector below!
       $(".header_wrapper").each(function() {
               $(this).css('zIndex', zIndexNumber);
               zIndexNumber -= 10;
       });
});