var app = angular.module("FormApp",[]);
app.controller("FormCtrl", function($scope){
	$scope.items=$scope.name+$scope.phone;
	$scope.phone="";
	$scope.name="";
	$scope.items=[];

	$scope.submit=function(){	
		var trueName = nameValidator();
		var trueNum = phoneValidator();
		if (trueName === true && trueNum === true) {
			success();
		}
	}
	// this function should check if the input is an empty string, but instead it puts the input equal to an empty array
	function nameValidator(){
		// var testername="";
		if ($scope.name===""){
			$scope.error=(" Please type your name "); 
			console.log('error name')
			return false;
		}
		else {
			return true;
		}

	};
	function phoneValidator() {
		var phoneSplit= $scope.phone.split("-");
		if( phoneSplit.length === 3){
			if (phoneSplit[0].length !== 3 || phoneSplit[0] === NaN) {
				$scope.error1+=(" Please type your phone number using the format XXX-XXX-XXXX ");  
				return false;
			}
			else if (phoneSplit[1].length !== 3 || phoneSplit[1] === NaN) {
				$scope.error1+=(" Please type your phone number using the format XXX-XXX-XXXX "); 
				return false;
			}
			else if (phoneSplit[2].length !== 4 || phoneSplit[2] === NaN) {
				$scope.error1+=(" Please type your phone number using the format XXX-XXX-XXXX "); 
				return false; 
			}
			else{
				return true;
			}
		}
		else{$scope.error1=(" Please type your phone number using the format XXX-XXX-XXXX "); 
		return false; 
	}
};


	function success(){
		if (phoneValidator()&&nameValidator() ){
			$scope.contacts=[];
            $scope.contacts.push($scope.name);
            $scope.contacts.push($scope.phone);

		   $scope.oneline=$scope.contacts.join(" ");
		   console.log ($scope.contacts.join(" "));
		   $scope.items.push($scope.oneline);
		   console.log($scope.items);
		   console.log($scope.items[0]);
		}
	}



	function clearInput(){
		$scope.phone="";
		$scope.name="";
		$scope.error="";
		$scope.error1="";
	}

});

