/* global $, alert, console */
$(function () {
    
    'use strict';

    // Adjust Header Height

    $('.header').height($(window).height());

    $(window).resize(function () {

        $('.header').height($(window).height());
        
        //Adjust Bxslider item in the center
        $('.bxslider').each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) /2 );
        });

    });

    // Links Add Active Class

    $('.links li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    //Adjust Bxslider item in the center
    $('.bxslider').each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) /2 );
    });

    // triger the bx slider
    $('.bxslider').bxSlider({

        pager: false

    });

    //smooth scroll to div
    $('.links li a').click(function () {

        $('html , body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        },1000);

    });

    // Our Auto Slider Code

    (function autoslider () {

        $('.slider .active').each(function () {

            if(!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000 , function() {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoslider();

                });

            } else {

                $(this).delay(3000).fadeOut(1000 , function() {

                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoslider();

                });

            }

        });

    }());

    // Trigger Nice Scroll

    $('html').niceScroll({

        cursorcolor: '#4c3db8', // to change the scroll color
        cursorwidth: '10px',
        cursorborder: 'none',
        cursorborderradius: '2px'
    });

});