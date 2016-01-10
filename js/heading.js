// animates sub headings
// author - Arsh
// github - https://github.com/Arsh23/



//sub heading animation
function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


function random_char()
{
	var string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&**';
	var rndnum = Math.floor(Math.random() * 68);
	return string.charAt(rndnum);
}

function random_string(len)
{
	var i;
	var string = '';

	for(i=0;i<len;i++)
	{
		string += random_char();
	}

	return string;

}

function return_arr(str)
{
	var i,j;
	var array = [];
	var len = str.length,tempstr = '';

	for(i=1;i<=5;i++)
	{
		array.push(random_string(1));
	}


	for(i=1;i<=len;i++)
	{
		array.push(random_string(i));
	}

	for(i=0;i<len;i++)
	{
		for(j=1;j<=3;j++)
		{
			tempstr = str.substring(0,i) + random_string(len-i-1);
			array.push(tempstr);
		}		
	}
	
	array.push(str);
	array.push(str);
	array.push(str);
	array.push(str);

	return array;
}

var array1 = [];
var counter1 = 0;
var str1 = '';
var id1 = 0;

var array2 = [];
var counter2 = 0;
var str2 = '';
var id2 = 0;

function animate_heading_1(elem)
{
	var $elem = $(elem);
	if(counter1 == array1.length - 1)
	{
		clearInterval(id1);
	}
	$elem.html(array1[counter1])
	counter1 += 1
}

function animate_heading_2(elem)
{
	var $elem = $(elem);
	if(counter2 == array2.length - 1)
	{
		clearInterval(id2);
	}
	$elem.html(array2[counter2])
	counter2 += 1
}

function main()
{
	if(isScrolledIntoView('.sub-heading-1') == true && id1==0)
	{
		counter1 = 0
		str1 = ''
		array1 = return_arr('REGISTRATION')
		id1 = setInterval( function() { animate_heading_1('.sub-heading-1'); }, 20);
		
	}
	if(isScrolledIntoView('.sub-heading-2') == true && id2==0)
	{
		counter2 = 0
		str2 = ''
		array2 = return_arr('FAQ')
		id2 = setInterval( function() { animate_heading_2('.sub-heading-2'); }, 20);
		
	}
	
}


setInterval(main,100);