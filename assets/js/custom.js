wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();

//owl js
(function($) {
    $('#mobile-owl').owlCarousel({
        items: 1,
        loop: false,
        video: true,
        lazyLoad: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            },
            1400: {
                items: 1
            }
        },
        nav: false
    });
})(jQuery);
// close owl close




//Header fixed Js
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("header").addClass("fixed-header").addClass("animated fadeIn");

    } else {
        $("header").removeClass("fixed-header").removeClass("animated fadeIn");

    }
});



$('.inner-nav-wrapper ul li a').click(function() {
    $('.inner-nav-wrapper ul li a').removeClass('active');
    $(this).addClass('active');
});

$('a[href*=#]').on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
});


$(document).ready(function() {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 3
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.nav-wrapper a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-wrapper ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
/*mobile toggle js*/
$(document).ready(function() {
    $('.mob-nave').click(function(e) {
        e.stopPropagation();
        $('.inner-nav-wrapper-mob').slideToggle();
    });

});
$(document).ready(function() {

    if ($(window).width() < 700 && $(window).load()) {
        $('body').click(function() {
            $('.inner-nav-wrapper-mob').slideUp();
        });
    }

    if ($(window).load()) {
        if ($(window).width() < 700) {
            $('body').click(function() {
                $('.inner-nav-wrapper-mob').slideUp();
            });
        }
    }

    $(window).resize(function() {
        if ($(window).width() < 700 && $(window).load()) {
            $('body').click(function() {
                $('.inner-nav-wrapper-mob').slideUp();
            });
        } else {
            $('body').click(function() {
                $('.inner-nav-wrapper-mob').slideDown();
            });
        }
        if ($(window).load()) {
            if ($(window).width() < 700) {
                $('body').click(function() {
                    $('.inner-nav-wrapper-mob').slideUp();
                });
            }
        } else {
            $('body').click(function() {
                $('.inner-nav-wrapper-mob').slideDown();
            });
        }

    });
});

//Header fixed Js close
// video play pause
$('.video_action').click(function() {
    playpause();
});
$('.video').click(function() {
    playpause();
});

function playpause() {
    var ele = document.getElementsByClassName("video")[0];
    if (ele.paused) {
        $('.video_action').hide();
        ele.play();
    } else {
        $('.video_action').show();
        ele.pause();
    }
}
// close video js
// video play pause
// $('.video_action_2').click(function() {
//     playpause();
// });
// $('.video_2').click(function() {
//     playpause();
// });

// function playpause() {
//     var ele = document.getElementsByClassName("video_2")[0];
//     if (ele.paused) {
//         $('.video_action_2').hide();
//         ele.play();
//     } else {
//         $('.video_action_2').show();
//         ele.pause();
//     }
// }