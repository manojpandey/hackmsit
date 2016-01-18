// custom countdown timer
// author - Arsh
// github - https://github.com/Arsh23/

var endtime = 'Febuary 3 2016 08:00:00 GMT+05:30';
var id = 0

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function update_clock() {
    var t = getTimeRemaining(endtime);
    var d = ('0' + t.days).slice(-2);
    var h = ('0' + t.hours).slice(-2);
    var m = ('0' + t.minutes).slice(-2);
    var s = ('0' + t.seconds).slice(-2);

    $('.days').html(d)
    $('.hours').html(h)
    $('.mins').html(m)
    $('.secs').html(s)

    if (t.total <= 0) {
        clearInterval(id);
    }
}

update_clock();
id = setInterval(update_clock, 1000);
