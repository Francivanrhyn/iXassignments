//window.onload = function() {
	// console.log the values of First Name and Last Name 
	function getFormValues() { 
		var first = document.getElementById("first").value;
		console.log(first);
		var last = document.getElementById("last").value;
		console.log(last);
	}

	// Change the color of the div with id "color-div"
	function changeColor() {
			document.getElementById("color-div").style.color="red";
	}

