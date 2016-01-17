// custom animations 
// author - Arsh
// github - https://github.com/Arsh23/


var controller = new ScrollMagic.Controller();

//strech all triangle to 100% width
var w = document.documentElement.clientWidth;
$('.triangle-1').css('border-width', ' 0 ' + w + 'px 100px 0');
$('.triangle-2').css('border-width', '100px 0 0 ' + w + 'px');
$('.triangle-3').css('border-width', '100px ' + w + 'px 0 0');
$('.triangle-4').css('border-width', '0 ' + w + 'px 100px 0');
$('.triangle-5').css('border-width', '100px 0 0 ' + w + 'px');
$('.triangle-6').css('border-width', '0 0 100px ' + w + 'px');
$('.triangle-8').css('border-width', '100px ' + w + 'px 0 0');
$('.triangle-7').css('border-width', '0 ' + w + 'px 100px 0');


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

//animate sub headings code start -
//------------------------------------------------------------------------------------------------
function random_char() {
    var string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&**';
    var rndnum = Math.floor(Math.random() * 68);
    return string.charAt(rndnum);
}

function random_string(len) {
    var i;
    var string = '';

    for (i = 0; i < len; i++) {
        string += random_char();
    }

    return string;

}

function return_arr(str) {
    var i, j;
    var array = [];
    var len = str.length,
        tempstr = '';

    for (i = 1; i <= 5; i++) {
        array.push(random_string(1));
    }


    for (i = 1; i <= len; i++) {
        array.push(random_string(i));
    }

    for (i = 0; i < len; i++) {
        for (j = 1; j <= 2; j++) {
            tempstr = str.substring(0, i) + random_string(len - i - 1);
            array.push(tempstr);
            /*tempstr = str.substring(0, i) + random_string(len - i - 1);
            array.push(tempstr);
*/
        }
    }

    array.push(str);
    array.push(str);
    array.push(str);
    array.push(str);

    return array;
}

var timer = 30;
var delay = 0;
var ids = [0, 0, 0, 0, 0, 0];
var array = [
    [],
    [],
    [],
    [],
    [],
    []
];
var counter = [0, 0, 0, 0, 0, 0];


function animate_heading_1(elem, reverse) {
    reverse = reverse || false;
    var $elem = $(elem);
    if (reverse == false) {
        if (counter[0] == array[0].length - 1) {
            clearInterval(ids[0]);
            //ids[0] = 0;
        }
        $elem.html(array[0][counter[0]])
        counter[0] += 1
    } else {
        if (counter[0] < 0) {
            $elem.html('');
            clearInterval(ids[0]);
            //ids[0] = 0;
        }
        $elem.html(array[0][counter[0]]);
        counter[0] -= 1;
    }

}

function animate_heading_2(elem, reverse) {
    reverse = reverse || false;
    var $elem = $(elem);
    if (reverse == false) {
        if (counter[1] == array[1].length - 1) {
            clearInterval(ids[1]);
            //ids[1] = 0;
        }
        $elem.html(array[1][counter[1]])
        counter[1] += 1
    } else {
        if (counter[1] < 0) {
            $elem.html('');
            clearInterval(ids[1]);
            //ids[1] = 0;
        }
        $elem.html(array[1][counter[1]]);
        counter[1] -= 1;
    }

}

function animate_heading_3(elem, reverse) {
    reverse = reverse || false;
    var $elem = $(elem);
    if (reverse == false) {
        if (counter[2] == array[2].length - 1) {
            clearInterval(ids[2]);
            //ids[2] = 0;
        }
        $elem.html(array[2][counter[2]])
        counter[2] += 1
    } else {
        if (counter[2] < 0) {
            $elem.html('');
            clearInterval(ids[2]);
            //ids[2] = 0;
        }
        $elem.html(array[2][counter[2]]);
        counter[2] -= 1;
    }

}

function animate_heading_4(elem, reverse) {
    reverse = reverse || false;
    var $elem = $(elem);
    if (reverse == false) {
        if (counter[3] == array[3].length - 1) {
            clearInterval(ids[3]);
            //ids[3] = 0;
        }
        $elem.html(array[3][counter[3]])
        counter[3] += 1
    } else {
        if (counter[3] < 0) {
            $elem.html('');
            clearInterval(ids[3]);
            //ids[3] = 0;
        }
        $elem.html(array[3][counter[3]]);
        counter[3] -= 1;
    }

}

function animate_heading_5(elem, reverse) {
    reverse = reverse || false;
    var $elem = $(elem);
    if (reverse == false) {
        if (counter[4] == array[4].length - 1) {
            clearInterval(ids[4]);
            //ids[4] = 0;
        }
        $elem.html(array[4][counter[4]])
        counter[4] += 1
    } else {
        if (counter[4] < 0) {
            $elem.html('');
            clearInterval(ids[4]);
            //ids[4] = 0;
        }
        $elem.html(array[4][counter[4]]);
        counter[4] -= 1;
    }

}

function animate_heading_6(elem, reverse) {
    reverse = reverse || false;
    var $elem = $(elem);
    if (reverse == false) {
        if (counter[5] == array[5].length - 1) {
            clearInterval(ids[5]);
            //ids[4] = 0;
        }
        $elem.html(array[5][counter[5]])
        counter[5] += 1
    } else {
        if (counter[5] < 0) {
            $elem.html('');
            clearInterval(ids[5]);
            //ids[4] = 0;
        }
        $elem.html(array[5][counter[5]]);
        counter[5] -= 1;
    }

}
//------------------------------------------------------------------------------------------------
//animate sub headings code ends

//.on parameters - change update progress start end enter leave
//animate first headings
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-1",
        triggerHook: 'onEnter',
        offset: 150,
        duration: 0
    })
    .addTo(controller)
    .on("start", function(e) {
        if (e.scrollDirection == 'FORWARD') {
            if (ids[0] == 0) {
                counter[0] = 0
                array[0] = return_arr('ABOUT')
                setTimeout(function() {
                    ids[0] = setInterval(function() {
                        animate_heading_1('.sub-heading-1');
                    }, timer);
                }, delay);
            }
        } else if (e.scrollDirection == 'REVERSE') {
            if (ids[0] == 0) {
                array[0] = return_arr('ABOUT')
                counter[0] = array[0].length;
                setTimeout(function() {
                    ids[0] = setInterval(function() {
                        animate_heading_1('.sub-heading-1', true);
                    }, timer);
                }, delay);
            }
        }
    });
//animate second headings
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-2",
        triggerHook: 'onEnter',
        offset: 150,
        duration: 0
    })
    .addTo(controller)
    .on("start", function(e) {
        if (e.scrollDirection == "FORWARD") {
            if (ids[1] == 0) {
                counter[1] = 0
                array[1] = return_arr('SCHEDULE')
                setTimeout(function() {
                    ids[1] = setInterval(function() {
                        animate_heading_2('.sub-heading-2');
                    }, timer);
                }, delay);
            }

        } else if (e.scrollDirection == 'REVERSE') {
            if (ids[1] == 0) {
                array[1] = return_arr('SCHEDULE')
                counter[1] = array[1].length;
                setTimeout(function() {
                    ids[1] = setInterval(function() {
                        animate_heading_2('.sub-heading-2', true);
                    }, timer);
                }, delay);
            }
        }
    });
//animate third headings
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-3",
        triggerHook: 'onEnter',
        offset: 150,
        duration: 0
    })
    .addTo(controller)
    .on("start", function(e) {
        if (e.scrollDirection == "FORWARD") {
            if (ids[2] == 0) {
                counter[2] = 0
                array[2] = return_arr('FAQ')
                setTimeout(function() {
                    ids[2] = setInterval(function() {
                        animate_heading_3('.sub-heading-3');
                    }, timer);
                }, delay);
            }
        } else if (e.scrollDirection == 'REVERSE') {
            if (ids[2] == 0) {
                array[2] = return_arr('FAQ')
                counter[2] = array[2].length;
                setTimeout(function() {
                    ids[2] = setInterval(function() {
                        animate_heading_3('.sub-heading-3', true);
                    }, timer);
                }, delay);
            }
        }
    });
//animate fourth headings
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-4",
        triggerHook: 'onEnter',
        offset: 150,
        duration: 0
    })
    .addTo(controller)
    .on("start", function(e) {
        if (e.scrollDirection == "FORWARD") {
            if (ids[3] == 0) {
                counter[3] = 0
                array[3] = return_arr('SPONSORS')
                setTimeout(function() {
                    ids[3] = setInterval(function() {
                        animate_heading_4('.sub-heading-4');
                    }, timer);
                }, delay);
            }
        } else if (e.scrollDirection == 'REVERSE') {
            if (ids[3] == 0) {
                array[3] = return_arr('SPONSORS')
                counter[3] = array[3].length;
                setTimeout(function() {
                    ids[3] = setInterval(function() {
                        animate_heading_4('.sub-heading-4', true);
                    }, timer);
                }, delay);
            }
        }
    });
//animate fifth headings
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-5",
        triggerHook: 'onEnter',
        offset: 150,
        duration: 0
    })
    .addTo(controller)
    .on("start", function(e) {
        if (e.scrollDirection == "FORWARD") {
            if (ids[4] == 0) {
                counter[4] = 0
                array[4] = return_arr('OUR TEAM')
                setTimeout(function() {
                    ids[4] = setInterval(function() {
                        animate_heading_5('.sub-heading-5');
                    }, timer);
                }, delay);
            }
        } else if (e.scrollDirection == 'REVERSE') {
            if (ids[4] == 0) {
                array[4] = return_arr('OUR TEAM')
                counter[4] = array[5].length;
                setTimeout(function() {
                    ids[4] = setInterval(function() {
                        animate_heading_5('.sub-heading-5', true);
                    }, timer);
                }, delay);
            }
        }
    });
//animate sixth headings
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-6",
        triggerHook: 'onEnter',
        offset: 150,
        duration: 0
    })
    .addTo(controller)
    .on("start", function(e) {
        if (e.scrollDirection == "FORWARD") {
            if (ids[5] == 0) {
                counter[5] = 0
                array[5] = return_arr('CONTACT')
                setTimeout(function() {
                    ids[5] = setInterval(function() {
                        animate_heading_6('.sub-heading-6');
                    }, timer);
                }, delay);
            }
        } else if (e.scrollDirection == 'REVERSE') {
            if (ids[5] == 0) {
                array[5] = return_arr('CONTACT')
                counter[5] = array[5].length;
                setTimeout(function() {
                    ids[5] = setInterval(function() {
                        animate_heading_6('.sub-heading-6', true);
                    }, timer);
                }, delay);
            }
        }
    });
//gears animation
var gear1 = TweenMax.to(".gear-big", 1, {
    rotation: 1000,
    ease: Sine.easeOut
});
var gear2 = TweenMax.to(".gear-small", 1, {
    rotation: -3000,
    ease: Sine.easeOut
});
var gear3 = TweenMax.to(".gear-med", 1, {
    rotation: 600,
    ease: Sine.easeOut
});
var scene = new ScrollMagic.Scene({
        duration: 10000
    })
    .setTween(gear1)
    .addTo(controller)
var scene = new ScrollMagic.Scene({
        duration: 10000
    })
    .setTween(gear2)
    .addTo(controller)
var scene = new ScrollMagic.Scene({
        duration: 10000
    })
    .setTween(gear3)
    .addTo(controller)
    //info box animation
$('.info-box').hover(
    function() {
        $(this).addClass('info-box-animate');
        $(this).stop(true, true).siblings('.info-heading').css('opacity', '0');
        $(this).stop(true, true).siblings('.info-text').css('opacity', '1');
    },
    function() {
        $(this).removeClass('info-box-animate');
        $(this).stop(true, true).siblings('.info-heading').css('opacity', '1');
        $(this).stop(true, true).siblings('.info-text').css('opacity', '0');
    }
);
$('.info-heading').hover(
    function() {
        $(this).siblings('.info-box').addClass('info-box-animate');
        $(this).stop(true, true).css('opacity', '0');
        $(this).stop(true, true).siblings('.info-text').css('opacity', '1');
    },
    function() {
        $(this).siblings('.info-box').removeClass('info-box-animate');
        $(this).stop(true, true).css('opacity', '1');
        $(this).stop(true, true).siblings('.info-text').css('opacity', '0');
    }
);
$('.info-text').hover(
    function() {
        $(this).siblings('.info-box').addClass('info-box-animate');
        $(this).stop(true, true).siblings('.info-heading').css('opacity', '0');
        $(this).stop(true, true).css('opacity', '1');
    },
    function() {
        $(this).siblings('.info-box').removeClass('info-box-animate');
        $(this).stop(true, true).siblings('.info-heading').css('opacity', '1');
        $(this).stop(true, true).css('opacity', '0');
    }
);
//animate schedule
var list1 = TweenMax.staggerFrom(".animate-list-1 li", 2, {
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        ease: Elastic.easeOut,
        force3D: true
    },
    0.2);
var list2 = TweenMax.staggerFrom(".animate-list-2 li", 2, {
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        ease: Elastic.easeOut,
        force3D: true
    },
    0.2);
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-2",
        triggerHook: 'onEnter',
        offset: 150,
        duration: 0
    })
    .setTween(list1)
    .addTo(controller)
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-2",
        triggerHook: 'onEnter',
        offset: 150,
        duration: 0
    })
    .setTween(list2)
    .addTo(controller)
    //animate faq box
var faq = TweenMax.from($('.faq'), 0.8, {
    scale: 0.2,
    autoAlpha: 0,
    ease: Back.easeOut
});
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-3",
        triggerHook: 'onEnter',
        offset: 200,
        duration: 0
    })
    .setTween(faq)
    .addTo(controller)
    //animate sponsers logos
var logo = TweenMax.staggerFrom($('.sponser-logo'), 0.8, {
        scale: 0.2,
        autoAlpha: 0,
        ease: Back.easeOut
    },
    0.2);
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-4",
        triggerHook: 'onEnter',
        offset: 550,
        duration: 0
    })
    .setTween(logo)
    .addTo(controller)
    // animate team
var team = TweenMax.staggerFrom($('.team'), 0.8, {
        scale: 0.2,
        autoAlpha: 0,
        ease: Back.easeOut
    },
    0.2);
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger-hdg-5",
        triggerHook: 'onEnter',
        offset: 250,
        duration: 0
    })
    .setTween(team)
    .addTo(controller)
    // lines animation
    /*
    var orig = document.querySelector('path'), length, timer;
    var obj = {length:0, pathLength:orig.getTotalLength()};
    var lines = TweenMax.to(obj, 10, {length:obj.pathLength, onUpdate:drawLine, ease:Linear.easeNone})
    function drawLine() {
      orig.style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
      //updateSlider();
    }
    var scene = new ScrollMagic.Scene({duration:5500,triggerElement: "#trigger-hdg-2",triggerHook: 'onEnter'})              
                        .setTween(lines)
                        .addTo(controller)
    */