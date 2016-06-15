var app = angular.module("FormApp",[]);
app.controller("FormCtrl", function($scope){
$scope.submit=function(){
	var truePhone = phoneValidator();
	var trueEmail = emailValidator();
	var trueName = nameValidator();
	var trueLength = passwordLength();
	var trueMatch = passwordEqual();
	if (trueName === true && truePhone === true && trueLength === true && trueMatch === true && trueEmail === true) {
			success();
		};

};

	function phoneValidator() {
		if($scope.phone) {
			var phoneSplit= $scope.phone.split("-");
			if( phoneSplit.length === 3){
				if (phoneSplit[0].length !== 3 || phoneSplit[0] === NaN) {
					$scope.error=(" Please type your phone number using the format XXX-XXX-XXXX ");  
					return false;
				}
				else if (phoneSplit[1].length !== 3 || phoneSplit[1] === NaN) {
					$scope.error=(" Please type your phone number using the format XXX-XXX-XXXX "); 
					return false;
				}
				else if (phoneSplit[2].length !== 4 || phoneSplit[2] === NaN) {
					$scope.error=(" Please type your phone number using the format XXX-XXX-XXXX "); 
					return false; 
				}
				else{
					return true;
				}
			}
			else{
				$scope.error=(" Please type your phone number using the format XXX-XXX-XXXX "); 
				return false; 
			}
		}
		else {
			$scope.error=(" Please type your phone number using the format XXX-XXX-XXXX "); 
			return false;
		}
	
};
			//valid email
	function emailValidator() {
		if ($scope.email){
			var emailsplit = $scope.email.split("@");
			if (emailsplit.length !== 2) {
				$scope.error1 = "Please enter a valid email";
				return false;
			} 
			else {
				var emaillast = emailsplit[1].split(".");
				if (emaillast.length !== 2) {
				$scope.error1 = "Please enter a valid email";
					return false
				}
				else{
					return true;
				}
			}
		}
		else{
			$scope.error1="Please enter a valid email";
			return false;
		}
	}
			// name input
	function nameValidator(){
	if ($scope.name){
		if ($scope.name===""){
			$scope.error2=(" Please type your name "); 
			return false;
		}
		else {
			return true;
		}
	}
	else{
		$scope.error2=(" Please type your name "); 
			return false;
	}
	};
		// password min length
	function passwordLength(){
	if ($scope.passwordLength){
		$scope.minlength = 6;
		if ($scope.password.length<$scope.minlength){
		  $scope.error3=(" The password must be at least 6 characters long");
		  return false 
		}
		else{
			return true
		}
	}
	else{
		$scope.error3=(" The password must be at least 6 characters long");
		return false
	}
}
			//password equal
	function passwordEqual(){
	if ($scope.confirmpassword){	
		if ($scope.password === $scope.confirmpassword){
			return true
		}
		else{
			$scope.error4=(" The passwords must be equal ")
			return false
		}
	}
	else{
		$scope.error5=("Please confirm password")
		return false
	}
	};

	function success(){
		if (phoneValidator()&&nameValidator()&&passwordLength()&&passwordEqual()&&emailValidator()){
//add to array and delete entire element
			$scope.truevar=true;
			console.log(truevar);
		}
	}

});



