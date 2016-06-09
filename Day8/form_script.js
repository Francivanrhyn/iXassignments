
$( document ).ready(function() {
	$( "#submit-btn" ).click(function() {
		var phoneNum=$("#phone").val();
		var email=$("#email").val();
		phoneValidator(phoneNum);
		emailValidator(email);
	});
});

function phoneValidator(phoneNum) {  
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
  		if(phoneNum.match(phoneno)) {
  			alert("That is a valid phone number");  
  			return true;

		}  
		else {  
			alert("Please try again using the format XXX-XXX-XXXX");  
  			return false;
			}  
};

function emailValidator(email) {
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if (email.match(filter)) {
			alert("That is a valid email");
			return true;  
		}
		else {
			alert("Please try again using the format xxx@xxx.xxx"); 
			return false; 
		}
};


