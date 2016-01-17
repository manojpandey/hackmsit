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

//reduce font size on mobiles
function check_screen_size() {
    var sizes = ['xs', 'sm', 'md', 'lg'];
    var $element = $('<div>');
    var i;

    $element.appendTo($('body'));

    for (i = 0; i < sizes.length; i++) {
        var size = sizes[i];
        var clas = 'hidden-' + size;

        $element.addClass(clas);

        if ($element.is(':hidden')) {
            $element.remove();
            return size;
        }

    }

    return 'lg';
}

function scaletext() {
    var currentsize = check_screen_size();
    if (currentsize == 'xs'|| currentsize == 'sm') {
        $('.intro').css('font-size', '9px');
        $('.subpart-1').css('font-size', '11px');
        $('.info-outer').css('font-size', '5px');
        $('.footer-text').css('font-size', '7px');
        $('.faq').css('font-size', '10px');
        $('.map').css('font-size', '9px');
        /*$('.faq').css('padding-left', '20px');
        $('.faq-a').css('padding-left', '20px');*/
        $('.gear').hide();
    } else {
        $('.intro').css('font-size', '16px');
        $('.subpart-1').css('font-size', '16px');
        $('.info-outer').css('font-size', '16px');
        $('.footer-text').css('font-size', '16px');
        $('.faq').css('font-size', '16px');
        $('.map').css('font-size', '16px');
        /*$('.faq').css('padding-left', '50px');
        $('.faq-a').css('padding-left', '50px');*/
        $('.gear').show();
    }
}


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