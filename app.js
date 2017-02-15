(function () {
'use strict';

angular.module('LunchCheck', [])
.controller("LunchCheckController", LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.foods = "";
  $scope.verdict = "";
  $scope.divclass="";
  $scope.textboxclass="";

  $scope.checkCurrentLunch = function(){
  	var foodarray = $scope.foods.split(",");
  	var count = 0;
  	for(var k=0;k<foodarray.length;k++){
  		var item = foodarray[k];
  		if(item !==""){
  			count++;
  		}
  	}

  	if(count === 0){
  		$scope.verdict = "Please enter data first";
  		$scope.divclass = "textcolorred";
  		$scope.textboxclass = "boxcolorred";
  	}
  	else if(count < 4){
  		$scope.verdict =  "Enjoy!";
  		$scope.divclass = "textcolorgreen";
  		$scope.textboxclass = "boxcolorgreen";

  	}else if(count > 3){
  		$scope.verdict = "Too much!";
  		$scope.divclass = "textcolorgreen";
  		$scope.textboxclass = "boxcolorgreen";

  	} 

  };
  




  


}

})();
