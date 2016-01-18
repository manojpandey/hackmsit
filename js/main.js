// highlight nav text on mouseover
$('.nav-text').mouseenter(
    function() {
        $(this).addClass('active')
    }
).mouseleave(
    function() {
        $(this).removeClass('active')
    }
);

// fix navbar to top after scroll

$(document).ready(
    function() {
        scaletext();
        var pos = $('.navbar').offset();
        $(window).bind('scroll',
            function() {
                if ($(window).scrollTop() > pos.top) {
                    $('.navbar').addClass('navbar-fixed-top');
                    //$('.outer-subpart-1').addClass('add-padding');
                } else {
                    $('.navbar').removeClass('navbar-fixed-top');
                    //$('.outer-subpart-1').removeClass('add-padding');
                }
            }
        );
    }
);

//faq animation
$('.q-btn').on('click',
    function(e) {
        $(this).parent().find('.collapse').collapse('toggle');
        if ($(this).find('.fa').hasClass('fa-angle-down') == true) {
            $(this).find('.fa').removeClass('fa-angle-down');
            $(this).find('.fa').addClass('fa-angle-up');
        } else if ($(this).find('.fa').hasClass('fa-angle-up') == true) {
            $(this).find('.fa').removeClass('fa-angle-up');
            $(this).find('.fa').addClass('fa-angle-down');
        }
    }
);