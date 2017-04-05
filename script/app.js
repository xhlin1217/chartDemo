var myApp = angular.module("myApp", []);

myApp.controller("chartMainController", function($scope, $http){


	var getData = function() {
	  return Math.round(Math.random() * 90) + 10
	};


	




	var barChartData1 = {
	  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
	  datasets: [{
	    fillColor: "rgba(0,60,100,1)",
	    strokeColor: "black",
	    data: [getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData()]
	  }]
	}

	var index1 = 11;
	var ctx1 = document.getElementById("chart1").getContext("2d");
	// ctx1.canvas.height = (window.innerWidth*39.941176470588235294117647058824)/100;
	// ctx1.canvas.height=window.innerHeight/6
	// ctx1.canvas.height=100
	var barChartDemo1 = new Chart(ctx1).Bar(barChartData1, {
	  responsive: true,
	  maintainAspectRatio: false,
	  barValueSpacing: 2
	});
	setInterval(function() {
	  barChartDemo1.removeData();
	  barChartDemo1.addData([getData()], "dD " + index1);
	  index1++;
	}, 1000);



	var barChartData2 = {
	  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
	  datasets: [{
	    fillColor: "rgba(0,60,100,1)",
	    strokeColor: "black",
	    data: [getData(), getData(), getData(), getData(), getData(), getData(), getData()]
	  }]
	}

	var index2 = 8;
	var ctx2 = document.getElementById("chart2").getContext("2d");
	// console.log(document.getElementById("chart2").offsetHeight);
	ctx2.canvas.height=100
	var barChartDemo2 = new Chart(ctx2).Bar(barChartData2, {
	  responsive: true,
	  maintainAspectRatio: false,
	  barValueSpacing: 2
	});
	setInterval(function() {
	  barChartDemo2.removeData();
	  barChartDemo2.addData([getData()], "day " + index2);
	  index2++;
	}, 2000);




	// console.log("session")
	var sessionHeight = document.getElementById('main').clientHeight;
	// console.log(sessionHeight);
	var sessionWidth = document.getElementById('main').offsetWidth;
	// console.log(sessionWidth);

	// console.log("chart1")
	var chart1Height = document.getElementById('chart1').clientHeight;
	// console.log(chart1Height);
	var chart1Width = document.getElementById('chart1').offsetWidth;
	// console.log(chart1Width);

	// console.log("chart2")
	var chart2Height = document.getElementById('chart2').clientHeight;
	// console.log(chart2Height);
	var chart2Width = document.getElementById('chart2').offsetWidth;
	// console.log(chart2Width);

	
	
	// $scope.chartWidth = 0.8*sessionWidth;
	$scope.chartWidth = 20;
	$scope.chartHeightone = 0.4*sessionHeight;
	$scope.chartHeighttwo = 0.4*sessionHeight;

	




	$(window).resize(function(){
	    // console.log("innerWidth" + window.innerWidth);
	    // console.log("innerHeight" + window.innerHeight);

	    $scope.$apply(function(){
	       document.getElementById("div1").style.height = innerHeight*0.4 + "px";
	       document.getElementById("div2").style.height = innerHeight*0.4 + "px";
	    });
	});






	$scope.submit = function(){
		if($scope.chartHeight1 > 100 || $scope.chartHeight1 < 0 ){
			alert("error input!!");
			return;
		}else{
			var chart1height = $scope.chartHeight1 / 100;

			var chart2height = (100 - $scope.chartHeight1) / 100;
			console.log(chart1height + " " + chart2height);

			console.log("innerHeight " + window.innerHeight);
			var maxHeight = window.innerHeight * 0.7;
			console.log("maxHeight: " + maxHeight);

			document.getElementById("div1").style.Height = (maxHeight * chart1height).toString() + "px";
			document.getElementById("div2").style.Height = (maxHeight * chart2height).toString() + "px";

			// document.getElementById("chart1").Height = (maxHeight * chart1height);
			// document.getElementById("chart2").Height = (maxHeight * chart2height);

			// $scope.height_chart1 = (maxHeight * chart1height);
			// $scope.height_chart2 = (maxHeight * chart2height);

			// document.getElementById("chart1").style.Height = (maxHeight * chart1height).toString() + "px";
			// document.getElementById("chart2").style.Height = (maxHeight * chart2height).toString() + "px";
		}

	}






























	
	// $scope.headerHeight = $("#navBar").height() / $("#navBar").parent().height() ;
	// $scope.inputHeight = $("#inputSizeForm").height() / $("#inputSizeForm").parent().height() ;
	// $scope.footerHeight =$("footer").height() / $("footer").parent().height() ;

	
	// console.log($scope.headerHeight);
	// console.log($scope.inputHeight);
	// console.log($scope.footerHeight);


});

