console.log("javascript is loading.");
$(document).ready(function(){

    $('.product').on('click', function(){
       $(this).siblings('.slideCont').slideToggle('slow');
       console.log("label clicked");
   });
});