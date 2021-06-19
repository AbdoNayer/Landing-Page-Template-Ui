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
        var scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 80;

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

    // Nav Scroll In Section

    $(document).on("click", ".list-item ul li a, .scroll",function(e) {

        $(".handle").removeClass("closed bgDefault");
        $(".click-nav").removeClass("m-0");
        $(".list-item").removeClass("back");

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top - 80

        }, 1000);
        e.preventDefault();
    });

    // Active Item On Click In Nav

    $(document).on("click", ".list-item ul li",function(e) {

        $(this).addClass('active').siblings().removeClass('active');

    });

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

    // Count Slider Dots

    $('.sliderHome').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
            return;
        }
        let carousel = e.relatedTarget;
        $('.slider-counter').text( carousel.relative(carousel.current()) + 1 + '/' + 0 + carousel.items().length);
    });

    // Counter Section Of Scroll
    let a = 0;
    $(window).scroll(function() {

        let oTop = $('.count-section').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $(".circle_percent").each(function() {
                let $this = $(this),
                    $dataV = $this.data("percent"),
                    $dataDeg = $dataV * 3.6,
                    $round = $this.find(".round_per");
                $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
                $this.prop('Counter', 0).animate({Counter: $dataV},
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $this.find(".percent_text").text(Math.ceil(now)+"%");
                        }
                    });
                if($dataV >= 51){
                    $round.css("transform", "rotate(" + 360 + "deg)");
                    setTimeout(function(){
                        $this.addClass("percent_more");
                    },1000);
                    setTimeout(function(){
                        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                    },1000);
                }
            });
            a = 1;
        }

    });

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

    $('#sliderClient').owlCarousel({
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



