// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".loader").fadeOut(500,function(){
        $(".loading").delay(1000).fadeOut(500);
    });
    $("body").css("overflow-y", "auto");

    // SliderHome Img InnerHeight Window
    let header      = $("header").innerHeight();
    let Height      = window.innerHeight - header;
    $("#sliderHome img").height(Height);

    // ANIMATION

    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });

    function Animate_box() {
        let scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            let val_one = $(this).offset().top - $(window).height() + 50;

            if (scroll_var > val_one){
                if($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                }else if($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                }else {
                    $(this).addClass('animated fadeInUp');
                }
            }
        });
    }

});


$(document).ready(function () {

    // Click Open Nav Mobile

    $(document).on("click", ".click-nav",function() {
        $(".handle").toggleClass("closed bgDefault");
        $(".click-nav").toggleClass("m-0");
        $(".list-item").toggleClass("back");
    });

    // Click Follow Me In Mobile

    $(document).on("click", ".follow-me p",function() {
        $(".social-tool-tip").toggleClass("fadeSec");
    });

    // scroll Top Tabs Bar For Mobile

    let lastScrollTop = 0;
    $(window).scroll(function(event){
        let st = $(this).scrollTop();
        if (st > lastScrollTop){
            // downscroll code
            $('.follow-me p').addClass('fadingScroll');
        } else {
            // upscroll code
            $('.follow-me p').removeClass('fadingScroll');
        }
        lastScrollTop = st;
    });


    $('.sliderHome').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
            return;
        }
        let carousel = e.relatedTarget;
        $('.slider-counter').text( carousel.relative(carousel.current()) + 1 + '/' + 0 + carousel.items().length);
    })

    // Owl Slider

    $('#sliderHome').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});



