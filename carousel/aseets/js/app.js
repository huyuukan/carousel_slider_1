$(function () {

    let dfwWidth = window.$(window).width();
    let wWidth = 0;
    gCarouselCurrent = 0;
    gLastCurrent = $(".g-carousel-l-1-i").length - 1;


    function gCarouselSize() {
        let width = $(window).width();
        let height = $(window).height();
        console.log(width);
        console.log(height);
        $(".g-carousel-container").css({
            'height': height
        });
        $(".g-carousel-l-1-i").css({
            'width': $(".g-carousel-l-1").width(),
            'margin-left': $(".g-carousel-l-1").width()
        });
        $(".g-carousel-l-2-i").css({
            'width': $(".g-carousel-l-2").width(),
            'margin-left': $(".g-carousel-l-2").width(),
        });
        $(".g-carousel-l-3-i").css({
            'width': $(".g-carousel-l-3").width(),
            'margin-left': $(".g-carousel-l-3").width(),
        });
    }
    gCarouselSize();

    $(window).bind("resize", resizeGcarousel);
    resizeGcarousel();

    function resizeGcarousel() {
        dfwWidth = wWidth;
        wWidth = window.$(window).width();
        if (dfwWidth != wWidth) {
            gCarouselSize();
        };
    };

    $(".g-carousel-r-i").eq(0).css({ 'opacity': '100%' });

    function changeGcarousel() {
        $(".g-carousel-l-1-g").stop().animate({
            'right': gCarouselCurrent * -200 + '%'
        }, 800);
        $(".g-carousel-l-2-g").stop().animate({
            'right': gCarouselCurrent * -200 + '%'
        }, 900);
        $(".g-carousel-l-3-g").stop().animate({
            'right': gCarouselCurrent * -200 + '%'
        }, 1000);
        $(".g-carousel-r-i").stop().animate({
            'opacity': '0%'
        }, 0)
        $(".g-carousel-r-i").eq(gCarouselCurrent).stop().animate({
            'opacity': '100%'
        }, 1000)
    };
    function changeGcarouselLine() {
        $(".g-carousel-top-l-line").animate({
            'width': '0%'
        }, 0, function () {
            $(".g-carousel-top-l-line").animate({
                'width': '48%'
            }, 1000)
        });
        $(".g-carousel-top-r-line").animate({
            'width': '0%'
        }, 0, function () {
            $(".g-carousel-top-r-line").animate({
                'width': '48%'
            }, 1000)
        });
        $(".g-carousel-bottom-l-line").animate({
            'width': '0%'
        }, 0, function () {
            $(".g-carousel-bottom-l-line").animate({
                'width': '48%'
            }, 1000)
        });
        $(".g-carousel-bottom-r-line").animate({
            'width': '0%'
        }, 0, function () {
            $(".g-carousel-bottom-r-line").animate({
                'width': '48%'
            }, 1000)
        });
        $(".g-carousel-left-line").animate({
            'height': '0%'
        }, 0, function () {
            $(".g-carousel-left-line").delay(1000).animate({
                'height': '92%'
            }, 1000)
        });
        $(".g-carousel-right-line").animate({
            'height': '0%'
        }, 0, function () {
            $(".g-carousel-right-line").delay(1000).animate({
                'height': '92%'
            }, 1000)
        });
        $(".g-carousel-l-cube-1").css({
            'transform': 'rotate(' + gCarouselCurrent * 360 + 'deg)'
        });
        $(".g-carousel-l-cube-2").css({
            'transform': 'rotate(' + gCarouselCurrent * -360 + 'deg)'
        });
    }
    let carouselTimer;
    function startTimer() {
        carouselTimer = setInterval(function () {
            if (gCarouselCurrent === gLastCurrent) {
                gCarouselCurrent = 0;
                changeGcarousel();
                changeGcarouselLine()
            } else {
                gCarouselCurrent++;
                changeGcarousel();
                changeGcarouselLine()
            };
        }, 5000);
    };
    startTimer();
});