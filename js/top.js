$(document).ready(function() {
    "use strict";
    if( $('.main_visual').length){
        $('.main_visual ul').slick({
            dots: false,
            arrows: false,
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            pauseOnFocus: false,
            focusOnSelect: true,
        });
    }

    if( $('.sec_pj_list').length){
        $('.sec_pj_list ul').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            pauseOnFocus: false,
            focusOnSelect: true,
            responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
    }

    if( $('.sec_service_list').length){
        $('.sec_service_list ul').slick({
            dots: true,
            arrows: false,
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            pauseOnFocus: false,
            focusOnSelect: true,
        });
    }
    
    if( $('.review_list').length){
        $('.review_list ul').slick({
            dots: true,
            arrows: false,
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            pauseOnFocus: false,
            focusOnSelect: true,
        });
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#btn_top').fadeIn(300);
        } else {
            $('#btn_top').fadeOut(300);
        }

        if ($(this).scrollTop() > 200) {
            $('.under header').addClass('active')
        }else{
            $('.under header').removeClass('active')
        }
    });

    $('#btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });


    $(".btn_side").click(function() {
        $(this).toggleClass('open');
        $("nav,body").toggleClass("active");
        $(".sub_btn").removeClass("disable");
        return false;
    });

    $('nav a').click(function() {
        $("nav,body").removeClass("active");
        $(".sub_btn").removeClass("disable");
        $(".btn_side").removeClass("open");
    });

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    $('.project_list_content li , .design_list li').on('click', function () {
        var href = $(this).find('a').attr('href');
        location.href = href;
    });
});


if ($(window).width() > 769) {
    $(window).bind('load', function() {
        AOS.init({
            easing: 'ease-out',
            duration: 1000,
            offset: 200,
        });
    });
} else {
    $(window).bind('load', function() {
        AOS.init({
            easing: 'ease-out',
            duration: 1000,
            offset: 50,
        });
    });
}

// anchor in page
$(window).bind('load', function() {
    "use strict";
    $(function() {
        $('a[href^="#"]').click(function() {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                if ($(window).width() > 769) {
                    $('html,body').animate({ scrollTop: p.top - 0 }, 400);
                } else {
                    $('html,body').animate({ scrollTop: p.top - 30 }, 400);
                }
            }
            return false;
        });
    });
});