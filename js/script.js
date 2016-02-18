$(document).ready(function(){
	$("#colour").click(function(){
		var size = prompt("Please enter a grid side");
		var dimensions = size * size;
		var width = 600/size;
		var height = 600/size;
		var red = Math.floor(Math.random()*255);
		var green = Math.floor(Math.random()*255);
		var blue = Math.floor(Math.random()*255);

		$(".container").empty();
		for (var i = 0; i < dimensions; i++)
		{
			$(".container").append("<div></div>")
		}
		var divs = $(".container div")
		setGrid(width, height, divs);

		divs.mouseenter(function(){
			$(this).css("background-color","rgb("+red+","+green+","+blue+")");
		});
	});

	$("#rcolour").click(function(){
		var size = prompt("Please enter a grid side");
		var dimensions = size * size;
		var width = 600/size;
		var height = 600/size;

		$(".container").empty();
		for (var i = 0; i < dimensions; i++)
		{
			$(".container").append("<div></div>");
		}
		var divs = $(".container div")
		setGrid(width, height, divs);

		divs.mouseenter(function(){
			var red = Math.floor(Math.random()*255);
			var green = Math.floor(Math.random()*255);
			var blue = Math.floor(Math.random()*255);
			$(this).css("background-color","rgb("+red+","+green+","+blue+")");
		});
	});

	$("#trail").click(function(){
		var size = prompt("Please enter a grid side");
		var dimensions = size * size;
		var width = 600/size;
		var height = 600/size;
		var red = Math.floor(Math.random()*255);
		var green = Math.floor(Math.random()*255);
		var blue = Math.floor(Math.random()*255);

		$(".container").empty();
		for (var i = 0; i < dimensions; i++)
		{
			$(".container").append("<div></div>");
		}
		var divs = $(".container div")
		setGrid(width, height, divs);
		divs.mouseenter(function(){
			$(this).css({
				"background-color":"rgb("+red+","+green+","+blue+")",
				"opacity":"1",
			});
			$(this).fadeTo("slow",0);
		});
	});

	$("#opacity").click(function(){
		var size = prompt("Please enter a grid side");
		var dimensions = size * size;
		var width = 600/size;
		var height = 600/size;
		var red = Math.floor(Math.random()*255);
		var green = Math.floor(Math.random()*255);
		var blue = Math.floor(Math.random()*255);

		$(".container").empty();
		for (var i = 0; i < dimensions; i++)
		{
			$(".container").append("<div></div>");
		}
		var divs = $(".container div")
		setGrid(width, height, divs);
		divs.css("background-color","rgb("+red+","+green+","+blue+")");
		divs.mouseenter(function(){
			var opacity = $(this).css("opacity");
			if (opacity > 0.1)
			{
				$(this).css("opacity", opacity - 0.1)
			}
			else
			{
				$(this).css("opacity","0");
			}
		});
	});

	function setGrid (width, height, divs)
	{
		divs.css({
			"width":width,
			"height":height,
			"float":"left",
		});
	}
});