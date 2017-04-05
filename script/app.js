var myApp = angular.module("myApp", []);

myApp.controller("chartMainController", function($scope, $http){
	var getData = function() {
	  return Math.round(Math.random() * 90) + 10
	};

	var barChartData1 = {
	  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
	  datasets: [{
	    fillColor: "rgba(0,60,100,0.7)",
	    strokeColor: "black",
	    data: [getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData(), getData()]
	  }]
	}

	var index1 = 11;
	var ctx1 = document.getElementById("chart1").getContext("2d");
	var barChartDemo1 = new Chart(ctx1).Bar(barChartData1, {
	  responsive: true,
	  maintainAspectRatio: false,
	  barValueSpacing: 2
	});
	setInterval(function() {
	  barChartDemo1.removeData();
	  barChartDemo1.addData([getData()], index1);
	  index1++;
	}, 100000);


	var barChartData2 = {
	  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
	  datasets: [{
	    fillColor: "rgba(0,60,100,0.4)",
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
	}, 1000000);



	// $(window).resize(function(){
	//     // console.log("innerWidth" + window.innerWidth);
	//     // console.log("innerHeight" + window.innerHeight);

	//     $scope.$apply(function(){
	//        document.getElementById("div1").style.height = innerHeight*0.4 + "px";
	//        document.getElementById("div2").style.height = innerHeight*0.4 + "px";
	//     });
	// });



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

			// document.getElementById("div1").style.Height = (maxHeight * chart1height).toString() + "px";
			// document.getElementById("div2").style.Height = (maxHeight * chart2height).toString() + "px";

			// document.getElementById("chart1").Height = (maxHeight * chart1height);
			// document.getElementById("chart2").Height = (maxHeight * chart2height);

			// $scope.height_chart1 = (maxHeight * chart1height);
			// $scope.height_chart2 = (maxHeight * chart2height);

			// document.getElementById("chart1").style.Height = (maxHeight * chart1height).toString() + "px";
			// document.getElementById("chart2").style.Height = (maxHeight * chart2height).toString() + "px";
		}

	}



	function chartStepOne(){
        var currentWindowHeight = $(window).height()
        var canvas = document.getElementById("chart1")
        var chartHeight = currentWindowHeight - 40 * 0.9
        var lineChartParent = document.getElementById('div1')
        canvas.width = lineChartParent.clientWidth;
        canvas.height = chartHeight;
        generateLineChart()
	}


	function chartStepOne(){
        var currentWindowHeight = $(window).height()
        var canvas = document.getElementById("chart2")
        var chartHeight = currentWindowHeight - 200
        var lineChartParent = document.getElementById('div2')
        canvas.width = lineChartParent.clientWidth;
        canvas.height = chartHeight;
        generateLineChart()
	}
});