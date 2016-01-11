

// highlight nav text on mouseover
$('.nav-text').mouseenter(
	function()
	{
		$(this).addClass('active')
	}
).mouseleave(
	function()
	{
		$(this).removeClass('active')
	}
);

// fix navbar to top after scroll
/*
$(document).ready(
	function() 
	{
		var pos = $('.navbar').offset();
		$(window).bind('scroll', 
			function() 
			{
		  		if ($(window).scrollTop() > pos.top) 
		  		{
		    		$('.navbar').addClass('navbar-fixed-top');
		   		}
		   		else
		   		{
		     		$('.navbar').removeClass('navbar-fixed-top');
		    	}
			}
		);
	}
);
*/