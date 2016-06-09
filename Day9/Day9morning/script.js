$(document).ready(function() {
	$(document).mousemove(function(e) {
	    $(".box").offset({
	        left: e.pageX,
	        top: e.pageY + 20
    	});
	});
    
	$("body").keypress(function(event) {
	   if (event.which == 103) {
	      $("h1").css("color","green");
	   }
	   else if (event.which == 98) {
	      $("h1").css("color","blue");
	   }
	});

	var count = 0;
	$(document).click(function() {
    	count++;
    	$(".counter").text("This page as been clicked: "+count+"times");
	});


});


