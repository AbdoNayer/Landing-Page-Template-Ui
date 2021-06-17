// Window Load screen

$(window).on('load', function () {

    AOS.init();

    // Loading Page

    $(".loader").fadeOut(500,function(){
        $(".loading").delay(1000).fadeOut(500);
    });
    $("body").css("overflow-y", "auto");

});


$(document).ready(function () {


});



