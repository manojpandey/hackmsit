

// highlight na text on mouseover
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
