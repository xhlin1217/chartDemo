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
	}, 2000);


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
	}, 3000);


	$scope.submit = function(){
		if($scope.chartHeight1 > 100 || $scope.chartHeight1 < 0 ){
			alert("error input!!");
		}else{
			
		}
	}



	function chartStepOne(){
        var currentWindowHeight = $(window).height();
        var canvas = document.getElementById("chart1");
        var chartHeight = currentWindowHeight - 10;
        var lineChartParent = document.getElementById('div1');
        canvas.width = lineChartParent.clientWidth;
        canvas.height = chartHeight;
        generateLineChart();
	}


	function chartStepOne(){
        var currentWindowHeight = $(window).height();
        var canvas = document.getElementById("chart2");
        var chartHeight = currentWindowHeight - 2;
        var lineChartParent = document.getElementById('div2');
        canvas.width = lineChartParent.clientWidth;
        canvas.height = chartHeight;
        generateLineChart();
	}
});