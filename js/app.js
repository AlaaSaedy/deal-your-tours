/*jshint jquery: true*/
/* global $ */
/*eslint-env jquery*/




/* NAVIGATION MENU */


if ($("body#homePage").length > 0) {

    /* JQUERY DATE PICKER */

    //    $("#datePicker1, #datePicker2").datepicker({
    //        changeMonth: true,
    //        changeYear: true,
    //        showOn: "button",
    //        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    //        buttonImageOnly: true,
    //        buttonText: "Select date"
    //    });

    //  

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<div class='fa fa-chevron-left prev-slide'></div>", "<div class='fa fa-chevron-right next-slide'></div>"],
        autoplay: true,
        dots: true,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /* ## FEATURES ## */

    $('.custom-overlay').hover(function () {
        $(this).siblings('.luxor').fadeToggle(100);
        $(this).siblings('.cairo').fadeToggle(100);
        $(this).siblings('.sharm').fadeToggle(100);
    });
}


/* ## TOP NAVIGATION BAR ## */

var tabs = $('.tabs');
    //var selector = $('.tabs').find('a').length;
    //var selector = $(".tabs").find(".selector");
    var activeItem = tabs.find('.active');
    var activeWidth = activeItem.innerWidth();
    $(".selector").css({
        "left": activeItem.position.left + "px",
        "width": activeWidth + "px"
    });

    $(".tabs").on("click", "a", function (e) {
        e.preventDefault();
        $('.tabs a').removeClass("active");
        $(this).addClass('active');
        var activeWidth = $(this).innerWidth();
        var itemPos = $(this).position();
        $(".selector").css({
            "left": itemPos.left + "px",
            "width": activeWidth + "px"
        });
    });






/* ## TRIPS PAGE FUNCTIONS ## */



if ($("body#tripsPage").length > 0) {

    function list() {
        $('.grid span').removeClass('active');
        $('.list span').addClass('active');
        $('.trips-section .col-md-6').removeClass('col-md-6').addClass('col-md-12, trip-view');
    }

    /* ## GALLERY GRID ## */

    function grid() {
        $('.list span').removeClass('active');
        $('.grid span').addClass('active');
        $('.trip-view').removeClass('col-md-12, trip-view').addClass('col-md-6');
    }

    $('.list').click(list);
    $('.grid').click(grid);
}
