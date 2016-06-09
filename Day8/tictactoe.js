$(document).ready(function() {
	var clickCount = 0; //change this strategically!

	$(".grid-box").click(function(e) {
		var clickedID = e.currentTarget.id; //the id of the box that was clicked.
		//fill in stuff HERE!
		if (!x) {
            $(this).toggleClass('user1');
            x = true;
            $(this).text("X"); 
        } 
        else {
            $(this).toggleClass('user2');
            x = false;
           $(this).text("0"); 
        }
	});
});
var x = false;
